import React, { Suspense, useEffect, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Credentials, StringTranslations } from '@crowdin/crowdin-api-client'
import { Button, LangType } from '@pancakeswap-libs/uikit'
import Web3 from 'web3';
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import { RedirectDuplicateTokenIds, RedirectOldAddLiquidityPathStructure } from './AddLiquidity/redirects'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import AddLiquidity from './AddLiquidity'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import Swap from './Swap'
import { RedirectPathToSwapOnly } from './Swap/redirects'
import { EN, allLanguages } from '../constants/localisation/languageCodes'
import { LanguageContext } from '../hooks/LanguageContext'
import { TranslationsContext } from '../hooks/TranslationsContext'
import useGetDocumentTitlePrice from '../hooks/useGetDocumentTitlePrice'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 16px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: bottom 24px center;
  background-size: 90%;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

const CACHE_KEY = 'pancakeSwapLanguage'

export default function App() {
  const web3 = new Web3(Web3.givenProvider);
  const [selectedLanguage, setSelectedLanguage] = useState<any>(undefined)
  const [translatedLanguage, setTranslatedLanguage] = useState<any>(undefined)
  const [address, setAddress] = useState<any>('')
  const [translations, setTranslations] = useState<Array<any>>([])
  const apiKey = `${process.env.REACT_APP_CROWDIN_APIKEY}`
  const projectId = parseInt(`${process.env.REACT_APP_CROWDIN_PROJECTID}`)
  const fileId = 6

  const credentials: Credentials = {
    token: apiKey
  }

  const stringTranslationsApi = new StringTranslations(credentials)

  const getStoredLang = (storedLangCode: string) => {
    return allLanguages.filter((language) => {
      return language.code === storedLangCode
    })[0]
  }

  useEffect(() => {
    const storedLangCode = localStorage.getItem(CACHE_KEY)
    if (storedLangCode) {
      const storedLang = getStoredLang(storedLangCode)
      setSelectedLanguage(storedLang)
    } else {
      setSelectedLanguage(EN)
    }
  }, [])

  const fetchTranslationsForSelectedLanguage = async () => {
    stringTranslationsApi
      .listLanguageTranslations(projectId, selectedLanguage.code, undefined, fileId, 200)
      .then((translationApiResponse) => {
        if (translationApiResponse.data.length < 1) {
          setTranslations(['error'])
        } else {
          setTranslations(translationApiResponse.data)
        }
      })
      .then(() => setTranslatedLanguage(selectedLanguage))
      .catch((error) => {
        setTranslations(['error'])
        console.error(error)
      })
  }

  useEffect(() => {
    // @ts-ignore
    window.ethereum.on('accountsChanged', async (accounts) => {
      if (accounts.length > 0){
        setAddress(accounts[0]);
      }
    });
  }, []);

  useEffect(() => {
    if (selectedLanguage) {
      fetchTranslationsForSelectedLanguage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage])

  const handleLanguageSelect = (langObject: LangType) => {
    setSelectedLanguage(langObject)
    localStorage.setItem(CACHE_KEY, langObject.code)
  }
  useGetDocumentTitlePrice()

  return (
    <Suspense fallback={null}>
      <HashRouter>
        <AppWrapper>
          <LanguageContext.Provider
            value={{
              selectedLanguage,
              setSelectedLanguage: handleLanguageSelect,
              translatedLanguage,
              setTranslatedLanguage
            }}
          >
            <TranslationsContext.Provider value={{ translations, setTranslations }}>
              <div style={{ width: '100%', display: 'flex', backgroundColor: '#8f80ba' }}>
                <div style={{ width: '85%' }} />
                <div style={{ width: '15%' }}>
                  <Button mt='10px' mb='10px' ml='30%' variant='tertiary' style={{ color: '#8f80ba' }}
                          onClick={() => {
                            if (window.ethereum) {
                              try {
                                // @ts-ignore
                                window.ethereum.enable().then(async () => {
                                  // eslint-disable-next-line @typescript-eslint/no-shadow
                                  const address = await web3.eth.getAccounts();
                                  setAddress(address[0]);
                                })
                              } catch (e) {
                                console.log(e)
                              }
                            }
                          }}
                  >
                    {address.length > 0 ? `${address.slice(0, 4)  }...${ address.slice(address.length - 4, address.length)}` : "Connect"}
                  </Button>
                </div>
              </div>
              {/* <Menu></Menu> */}
              <BodyWrapper>
                <Popups />
                <Web3ReactManager>
                  <Switch>
                    <Route exact strict path='/swap' component={Swap} />
                    <Route exact strict path='/find' component={PoolFinder} />
                    <Route exact strict path='/pool' component={Pool} />
                    <Route exact path='/add' component={AddLiquidity} />
                    <Route exact strict path='/remove/:currencyIdA/:currencyIdB' component={RemoveLiquidity} />

                    {/* Redirection: These old routes are still used in the code base */}
                    <Route exact path='/add/:currencyIdA' component={RedirectOldAddLiquidityPathStructure} />
                    <Route exact path='/add/:currencyIdA/:currencyIdB' component={RedirectDuplicateTokenIds} />
                    <Route exact strict path='/remove/:tokens' component={RedirectOldRemoveLiquidityPathStructure} />

                    <Route component={RedirectPathToSwapOnly} />
                  </Switch>
                </Web3ReactManager>
                <Marginer />
              </BodyWrapper>
            </TranslationsContext.Provider>
          </LanguageContext.Provider>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}

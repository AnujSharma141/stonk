import { get } from 'axios'

const QUOTE_INFO_URL = 'https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/ajaxGetQuoteJSON.jsp?series=EQ&symbol='
const GET_QUOTE_URL = 'https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/GetQuote.jsp?symbol='

//data fetch
async function quote(symbol){
    return get(QUOTE_INFO_URL + encodeURIComponent(symbol), {
        headers: {
          Referer: GET_QUOTE_URL + encodeURIComponent(symbol),
          'X-Requested-With': 'XMLHttpRequest'
        }
    })
}

export default quote
import axios from 'axios'
import ora from 'ora'

const SEARCH_URL = 'https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/ajaxCompanySearch.jsp?search='

//scrape util funcs
function stripTags(string) {
    return string.replace(/<(.|\n)*?>/g, '').trim()
}
function searchTransformer(isIndex) {
    var matcher = '';
    if (isIndex) {
      matcher = /underlying=(.*?)&/;
    } else {
      matcher = /symbol=(.*?)&/;
    }
    return function (data) {
      var matches = data.match(/<li>(.*?)<\/li>/g);
      return matches.map(function (value1) {
        var symbol = value1.match(matcher);
        value1 = stripTags(value1).replace(symbol[1], '');
        return {
          name: value1 || '',
          symbol: symbol[1] || ''
        }
      })
    }
  }


//data fetch 
async function search(key){    
const spinner = ora('searching').start()
axios.get(SEARCH_URL + encodeURIComponent(key), {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Referer': 'https://www.nseindia.com/ChartApp/install/charts/mainpage.jsp',
      Host: 'www.nseindia.com'
    },
    transformResponse: searchTransformer(false)
  }).then(res => {
      spinner.stop()
      res.data.map(item => console.log(`${item.symbol} : ${item.name} `))
  })
}

export default search
import got from 'got'

async function scrape(artist, song){
	try{
	const showData = await got(`https://www.azlyrics.com/lyrics/${artist}/${song}.html`)
	const pre = showData.body.split("<!-- Usage of azlyrics.com content by any third-party lyrics provider is prohibited by our licensing agreement. Sorry about that. -->")
	const post =  pre[1].split("<!-- MxM banner -->")
	const result = post[0].replace(/<br>/g,"").replace(/<i>/gi,"").replace(/[</]/gi,"").replace(/i>/gi,"").replace('div>','')	
	return {lyrics: result, error:{status:false}}
	}
	catch(error){
		return {error:{ message: 'Not Found!' , status: true}}
	}
}

export default scrape
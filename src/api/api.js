import axios from 'axios'

const url = 'https://api.quran.com/api/v4'

export const serchfor = async (q)=>{
    try {
        const result = await axios.get(`${url}/search?size=20&page=1&q='${q}'`)
        const gg = result.data.search.results
       const ggg = gg.map((r)=>({t:r.text,id:r.verse_key}))
       //addd surah aya
    return ggg
    } catch (error) {
        console.log(error)
    }
}

//return surah and page and num aya
export const serchayah = async(id)=>{
try {
     const result = await axios.get(`${url}/verses/by_key/${id}`)
     const pagenum = result.data.verse.page_number
     const surahid = id.split(':')[0]
     const result2 = await axios.get(`${url}/chapters/${surahid}`)
     const g = result2.data.chapter.name_arabic
     return {page:pagenum,name:g}
    
} catch (error) {
    console.log(error)
}
}

export const getepage = async(p)=>{
    try {
        const result = await axios.get(`http://api.alquran.cloud/v1/page/${p}/quran-uthmani`)
        const ayat = result.data.data.ayahs
        const gg = ayat.map((a)=>(a.text + ' '+ a.number))
        return gg
    } catch (error) {
        console.log(error)
    }
}

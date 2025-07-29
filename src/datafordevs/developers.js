const devData = ["gaearon","yyx990803","t3dotgg","sindresorhus","ry","Rich-Harris","worrydream","kentcdodds","tj","mislav","torvalds","hadley","JakeWharton","mojombo","Substack","kennethreitz","addyosmani","wesbos","taylorotwell","isaacs","mrdoob","antfu"];

export const getdev = () => { 
    const data = []
    while (data.length <5) {
        const element = devData[0 + Math.floor(Math.random() * devData.length) ]
        if (data.indexOf(element) === -1) data.push(element)
    }
    return data
 }
export const getSearched = (s,arr) => { 
    const newArr = arr.filter(elem=> elem.name.toLowerCase().includes(s))
    return newArr
 }
 
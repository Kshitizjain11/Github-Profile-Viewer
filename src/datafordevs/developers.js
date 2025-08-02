import { useSort } from "../context/SortContext.jsx";

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
    const newArr = arr.filter(elem=> elem.name.toLowerCase().includes(s.toLowerCase()))
    return newArr
 }
 

 // For Sorting
 export const sorter = (arr,selectedSort) => { 
    const newArr = arr.slice()
    if (selectedSort===3) {
        return newArr.sort((a,b) => {
            return b.forks_count - a.forks_count  })
       
    }
     else if (selectedSort===4) {
        return newArr.sort((a,b) => {
            return b.open_issues - a.open_issues  })
       
    }
     else if (selectedSort===2) {
        return newArr.sort((a,b) => {
            return b.stargazers_count - a.stargazers_count  })
       
    }
    else if (selectedSort===1) {
        return newArr.sort((a,b) => {
            return new Date(b.created_at) - new Date(a.created_at)  })
       
    }

    else {
        return newArr.sort((a,b) => {
            return new Date(b.updated_at) - new Date(a.updated_at)  })
    }
  }


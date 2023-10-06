const getStoreddata= ()=>{
    const storedData=localStorage.getItem('storeDonation')
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}

const saveData =id=>{
    const storeDonationData = getStoreddata();
    const exist = storeDonationData.find(Id =>Id===id)
    if(!exist)
    {
        storeDonationData.push(id)
        localStorage.setItem('storeDonation', JSON.stringify(storeDonationData))
    }
}

 export default saveData

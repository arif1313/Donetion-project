const getStoreddata =()=>{
    const storedData=localStorage.getItem('storeDonation')
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}
export default getStoreddata
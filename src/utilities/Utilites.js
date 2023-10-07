
import getStoreddata from "./getelemen";
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

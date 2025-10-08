const getstoreApp = () => {
  const storeBookSTR = localStorage.getItem("readlist");
  if (storeBookSTR) {
    const storeBookData=JSON.parse(storeBookSTR)
    return storeBookData
  }
  else{
    return[]
  }
};

const addStoreApp = (id) => {
    const storeAppData=getstoreApp()
    if (storeAppData.includes(id)) {
        alert('allready exist')
    }
    else{
       storeAppData.push(id)
       const data = JSON.stringify(storeAppData)
       localStorage.setItem('readlist', data)
    }
};

const removeStoreApp = (id) => {
  const storeAppData = getstoreApp();
  const newData = storeAppData.filter(appId => appId !== id); // remove id
  localStorage.setItem('readlist', JSON.stringify(newData));
}
export  {addStoreApp , getstoreApp, removeStoreApp}
const getstoreApp = () => {
  const storeAppSTR = localStorage.getItem("installApp");
  if (storeAppSTR) {
    const storeAppData = JSON.parse(storeAppSTR);
    return storeAppData.map((id) => parseInt(id));
  } else {
    return [];
  }
};

const addStoreApp = (id) => {
  const storeAppData = getstoreApp();
  if (storeAppData.includes(id)) {
    alert("allready exist");
  } else {
    storeAppData.push(id);
    const data = JSON.stringify(storeAppData);
    localStorage.setItem("installApp", data);
  }
};

const removeStoreApp = (id) => {
  const storeAppData = getstoreApp();
  const newData = storeAppData.filter((appId) => appId !== id);
  localStorage.setItem("installApp", JSON.stringify(newData));
};
export { addStoreApp, getstoreApp, removeStoreApp };

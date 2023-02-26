const puxaDados = async () => {
  try {
    const response = await fetch('./data.JSON');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

puxaDados();

let input_value = document.getElementById("number");
let btn_adicionar = document.getElementById("btn_add");
let btn_limpar = document.getElementById("btn_remove");
let result = document.getElementById("resultado");

let arr = [];

let triplicar = () => {
  let UsuarioValue = input_value.value;
  arr.push(UsuarioValue);

  let config = arr.map((valor) => {
    let calc = valor * 3;
    return calc;
  });
  result.innerHTML = config;
};
let limpar = () => {
  result.innerHTML = "";
  arr.splice(0, arr.length);
};

btn_adicionar.addEventListener("click", triplicar);
btn_limpar.addEventListener("click", limpar);

let display = document.getElementById('screen'); 
let punto = false; 
let datosDisplay = '0'; 
let operador = null; 
let num1 = null;
let num2 = null;  

function getDisplay(value)
{
    if (datosDisplay==='0'||datosDisplay==='-0') {
        
        datosDisplay = value;
    }
    else if(datosDisplay==="."){
        datosDisplay = '0.'; 
    }
    else
    {
        datosDisplay += value
    }
    actualizarDisplay(); 
}

function Operacion(value)
{
    operador = value; 
    num1= parseFloat(datosDisplay); 
    datosDisplay = '0'; 
    actualizarDisplay(); 
}

function calcular(operador)
{
    num1 = parseFloat(datosDisplay); 

    if(operador==='raiz')
    {
        datosDisplay = raiz(num1);  
    }
    else if(operador==='x^2')
    {
        datosDisplay = potencia(num1);

    }else if(operador==='F')
    {
        datosDisplay = factorial(num1); 
    }
    else
    {
        calulobasico(); 
    }
    actualizarDisplay();
}

function calulobasico()
{
    if(operador&&num1!==null)
    {
        num2 = parseFloat(datosDisplay); 
        switch (operador) {
            case "*":
                datosDisplay = multiplicacion(num1,num2); 
                break;
            case '/':
                if (num2!=0) {
                    datosDisplay = divicion(num1,num2); 
                }else
                {
                    datosDisplay = "Error"; 
                }
                break;
            case 'x^x':
                datosDisplay = potenciax(num1,num2); 
                break;  
            case '+':
                datosDisplay = suma(num1,num2);  
                break;    
            case '-':
                datosDisplay = resta(num1,num2);  
                break;        
            case "%":
                datosDisplay = residuo(num1,num2); 
                break;
            default:
                break;
        }
    }
    operador = null; 
    num1 = null; 
    actualizarDisplay(); 
}


function evento(event)
{
    switch (event) {
        case 'C':
            limpiar(); 
            break;
        case 'x^x':
            Operacion(event); 
            break;  
        case '=':
            calulobasico(); 
            break;    
        case 'Eliminar':
            if(datosDisplay !== '0')
            {
                datosDisplay = datosDisplay.slice(0,-1); 
                console.log(datosDisplay); 
                actualizarDisplay(); 
            }
    
            break;
        case '-/+':
                if(punto===true){
                    operador = '+'; 
                    Operacion(operador);
                    punto = false;  
                }else
                {
                    operador = '-'; 
                    Operacion(operador);
                }
            break;             
        default:
            break;
    }
}

function botonActivo(value)
{
    punto = value; 
}

let actualizarDisplay= () => display.textContent = datosDisplay; 

const limpiar =()=>{
    display.textContent="0"; 
    datosDisplay = '0';
}; 

const suma = (x,y)=>x+y; 
const resta = (x,y)=>x-y; 
const multiplicacion = (x,y)=>x*y; 
const divicion = (x,y) => x/y; 
const raiz= (x)=> (Math.sqrt(x)).toString();
const potencia = (x)=> Math.pow(x,2).toString();
const residuo = (x,y)=> x%y; 
const factorial=(x)=>
{
    if(x==0)
    {
        return 1; 
    }else{
        return x * factorial(x-1); 
    }
}
const potenciax = (x,y)=> Math.pow(x,y).toString();
//store the products array in localstorage as "products"
function go_to_inv(){window.location.href='inventory.html';}
const form = document.querySelector('form');
var arr= JSON.parse(localStorage.getItem('products')) ||[]

function store_data(){
    event.preventDefault()
    var object={}
    object.type=form.type.value;
    object.desc=form.desc.value;
    object.price=form.price.value;
    object.image=form.image.value;

    arr.push(object)
    localStorage.setItem('products',JSON.stringify(arr))
    window.location.reload()

}
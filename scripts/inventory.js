function go_to_index(){window.location.href='index.html'}

// window.location.reload()

var arr= JSON.parse(localStorage.getItem('products')) || []
const container = document.querySelector('#all_products');

function display(arr){
    arr.forEach(function(ele,i){
        const card = document.createElement('div');

        const image = document.createElement('img');
        image.src=ele.image

        const type = document.createElement('h2');
        type.innerText=ele.type

        const desc = document.createElement('p');
        desc.innerText=ele.desc

        const price = document.createElement('p');
        price.innerText=ele.price

        const Delete = document.createElement('button');
        Delete.innerText='Remove product'
        Delete.setAttribute('id','remove_product')

        Delete.addEventListener('click',function(){
            del(i)
        })
        card.append(image,type,desc,price,Delete)
        container.append(card)
    })
}

display(arr)

function del(i){

    var arr= JSON.parse(localStorage.getItem('products')) || []

    let n_arr=arr.filter(function(ele,index){

        return index!==i

    })
    localStorage.setItem('products',JSON.stringify(n_arr))
    display(n_arr)
    window.location.reload()

}
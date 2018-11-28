new Vue({
	el:".hugeBox",
	data:{
		flag:false,
		num:0,//商品数量
		shoppingList:[
			{
				name:"HLA海澜之家-淡定从容迎夏天 - 2018夏季新品镶拼条纹",
				size:"48",
				price:"98",
			}
		],
	},
	methods:{
		beforeEnter(el){
			el.style.transform = 'translate(0, 0)'
		},
		enter(el, done){
			el.offsetWidth
			el.style.transform = 'translate(380px, -600px)'
			el.style.transition = "all .6s ease"
			done()
		},
		afterEnter(el){
			this.flag = !this.flag
			++this.num
		}
			
	}
})
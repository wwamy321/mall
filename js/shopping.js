var shopping = new Vue({
	el:".shopping",
	data:{
		num:0,
		i:0,//当前商品数量
		totalPrice:0,//总价
		shoppingList:[
			{
				src:"images/de6d90fe-6be0-4e34-bc64-dd4317f68431_t_235x297_90.jpg",
				name:"HLA海澜之家-淡定从容迎夏天 - 2018夏季新品镶拼条纹",
				size:48,//尺码
				price:98,//单价
				num:1,//数量
				subtotal:98,//小计
			},
			{
				src:"images/de6d90fe-6be0-4e34-bc64-dd4317f68431_t_235x297_90.jpg",
				name:"HLA海澜之家-淡定从容迎夏天 - 2018夏季新品镶拼条纹",
				size:48,
				price:98,
				num:1,
				subtotal:98,
			},
			{
				src:"images/de6d90fe-6be0-4e34-bc64-dd4317f68431_t_235x297_90.jpg",
				name:"HLA海澜之家-淡定从容迎夏天 - 2018夏季新品镶拼条纹",
				size:48,
				price:98,
				num:1,
				subtotal:98,
			},
			{
				src:"images/de6d90fe-6be0-4e34-bc64-dd4317f68431_t_235x297_90.jpg",
				name:"HLA海澜之家-淡定从容迎夏天 - 2018夏季新品镶拼条纹",
				size:48,
				price:98,
				num:1,
				subtotal:98,
			},
			{
				src:"images/de6d90fe-6be0-4e34-bc64-dd4317f68431_t_235x297_90.jpg",
				name:"HLA海澜之家-淡定从容迎夏天 - 2018夏季新品镶拼条纹",
				size:48,
				price:98,
				num:1,
				subtotal:98,
			}
		],
	},
	methods:{
		del(i){
			this.shoppingList.splice(i, 1);
		},
		reduce(index){
			if( this.shoppingList[index].num <= 1){
				this.shoppingList[index].num = 1
			}else{
				this.shoppingList[index].num --
				this.shoppingList[index].subtotal -= this.shoppingList[index].price
			}
		},
		plus(index){
			this.shoppingList[index].num ++
			console.log(this.shoppingList[index].subtotal)
			this.shoppingList[index].subtotal = this.shoppingList[index].price * this.shoppingList[index].num
		},
	},
	mounted(){
		this.i = this.shoppingList.length
	},
	updated(){
		this.i = this.shoppingList.length
		let num = 0;
		for(item of this.shoppingList){
			 num +=item.subtotal
		}
		this.totalPrice = num;
	}
})
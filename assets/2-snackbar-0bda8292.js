import{i}from"./vendor-77e16229.js";document.querySelector(".form").addEventListener("submit",function(o){o.preventDefault();const s=new FormData(this),t=s.get("delay"),n=s.get("state");new Promise((e,m)=>{setTimeout(()=>{n==="fulfilled"?e(t):m(t)},t)}).then(e=>{i.success({title:"",icon:!1,message:`✅ Fulfilled promise in ${e}ms`,position:"topRight",timeout:5e3})}).catch(e=>{i.error({title:"",icon:!1,message:`❌ Rejected promise in ${e}ms`,position:"topRight",timeout:5e3})})});
//# sourceMappingURL=2-snackbar-0bda8292.js.map
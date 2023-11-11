import{s as e,u as c,j as o,l as x}from"./index-749f649f.js";import{H as u}from"./Helmet-53b487f1.js";import{a as m}from"./pages.styled-9e62b9ca.js";const h=e.form`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 30px 30px 30px 30px;
  border-radius: 30px;
  border: 2px solid var(--accentColor);
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.062);
  box-sizing: border-box;
`,g=e.label`
  font-size: 2.5em;
  color: var(--accentColor);
  font-weight: 700;
  margin: 15px 0 30px 0;
`,i=e.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,a=e.svg`
  position: absolute;
  left: 10px;
`,l=e.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgb(173, 173, 173);
  border-radius: 30px;
  margin: 10px 0;
  color: black;
  font-size: 0.8em;
  font-weight: 500;
  box-sizing: border-box;
  padding-left: 30px;

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--semiAccentColor);
  }

  &::placeholder {
    color: var(--mainColor);
    font-size: 1em;
    font-weight: 500;
  }
`,b=e.button`
  position: relative;
  width: 100%;
  border: 2px solid var(--accentColor);
  background-color: var(--accentColor);
  height: 40px;
  color: white;
  font-size: 0.8em;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 30px;
  margin: 10px;
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.253);
    height: 100%;
    width: 150px;
    top: 0;
    left: -200px;
    border-bottom-right-radius: 100px;
    border-top-left-radius: 100px;
    filter: blur(10px);
    transition-duration: 0.5s;
  }

  &:hover::after {
    transform: translateX(600px);
    transition-duration: 0.5s;
  }
`,f=()=>{const p=c(),d=r=>{r.preventDefault();const t=r.currentTarget,n=t.elements.username.value,s=t.elements.password.value;console.log("Username:",n),console.log("Password:",s),p(x({username:n,password:s})),t.reset()};return o.jsxs(h,{onSubmit:d,autoComplete:"off",children:[o.jsx(g,{children:"Login"}),o.jsxs(i,{children:[o.jsx(a,{viewBox:"0 0 16 16",fill:"#212121",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",className:"inputIcon"}),o.jsx(l,{placeholder:"Username",id:"username",name:"username",type:"username"})]}),o.jsxs(i,{children:[o.jsx(a,{viewBox:"0 0 16 16",fill:"#212121",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",className:"inputIcon"}),o.jsx(l,{placeholder:"Password",id:"password",name:"password",type:"password"})]}),o.jsx(b,{id:"button",type:"submit",children:"Submit"})]})};function C(){return o.jsxs("div",{children:[o.jsx(u,{children:o.jsx(m,{children:"Login"})}),o.jsx(f,{})]})}export{C as default};

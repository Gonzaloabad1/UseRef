import "./Focus.css";
import { useRef, useEffect } from "react";
const Focus = () => {
const focusInputRef = useRef<HTMLInputElement>(null);
useEffect(() => {
if (focusInputRef.current) focusInputRef.current.focus();
}, []);
return (
<div>
<form>
<div>
<label htmlFor="user">Usuario</label>
<input type="text" id="user" placeholder="User" ref={focusInputRef} />
</div>
<div>
<label htmlFor="pass">Constraseña</label>
<input type="password" id="pass" placeholder="Pass" />
</div>
</form>
</div>
);
};

export default Focus;
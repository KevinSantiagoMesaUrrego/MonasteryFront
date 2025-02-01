import { Tabla } from "./component/tabla/tabla";

export default function Home() {
  return (
<div className="w-full "> <Tabla headers={['id','producto','cantidad','precio']} data={[{
    id: '1',
    producto: 'asd',
    cantidad: '1',
    precio: '123'}]}/>
    </div>

  );
}

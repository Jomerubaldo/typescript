let name1: string;

let age: number;

let isStudent: boolean;

let subjects: string[];

let printName: (name: string) => void;

let userName: unknown;

type Y = {
  a: number;
  b: string;
};
type Z = {
  c: number;
  d: string;
};

interface Student {
  name: string;
  age: number;
}

interface HS extends Student {
  position: string;
}


const App: React.FC() {
  return(
    <div className="App">
    Mabuhay Mundo!
    </div>
  )
}
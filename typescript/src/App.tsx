import "./App.css";

// This is types of data

let name: String;
let age: number;
let isStudent: boolean;

let Subjects: String[];

let Position: [number, string];

Position = [5, "Jomer"];

type Student1 = {
  name: string;
  age?: number;
};

let student: Student = {
  name: "Jomer",
};

let lotsOfStudent: Student[];

function printName(name: string) {
  // need  to date type if string or number dont just put without data tyoe
  console.log(name);
}

let printNames: (name: string) => void;

type Y = {
  a: number;
  b: string;
};

type Z = {
  // this function is connected each other
  c: number;
  d: string;
};

interface Student {
  name: string;
  age?: number;
}

interface HS extends Student {
  position: string;
}

//functional component
const App: React.FC = () => {
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-92 h-92 flex justify-center items-center">
        <div className=" bg-black w-52 h-52 flex justify-center items-center">
          <div className="bg-white w-32 h-32 flex justify-center items-center">
            <div className="bg-black w-22 h-22 flex justify-center items-center">
              <div className="text-indigo-400 font-bold">
                React<span className="text-yellow-400">JS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;



// to run this goto terminal and select git bash then type npm start

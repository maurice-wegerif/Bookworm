import { useNavigate } from "react-router-dom";
import { Book } from "../../helpers/types";
import { Button } from "../button";

interface BookDetailsProps {
  book: Book;
}

export const BookDetails = ({ book }: BookDetailsProps) => (
  <section className="bg-white p-16">
      <div className="flex flex-row">
        <div className="basis-5/12"> <img className="object-fill h-373 w-96" src={book.imageUrl} /></div>
        <div className="basis-7/12 px-10 py-4">
          <div className="basis-10/12 text-6xl text-center"> {book.title} </div>
          <div className="basis-10/12 text-2xl text-center font-thin"> {book.author} </div>

          <div className="flex flex-row py-2 pt-6">
            <div className="basis-1/2 text-xl text-center font-bold"> “Fantastic” {/* Må kobles opp mot backend */}
            <div className="basis-1/2 text-sm text-center font-thin"> 6.0/6.0 </div> {/* Må kobles opp mot backend */}
            <div className="basis-1/2 text-base text-center font-normal"> The New York Times </div> {/* Må kobles opp mot backend */}
            </div>
            <div className="basis-1/2 text-xl text-center font-bold"> “A masterpiece” {/* Må kobles opp mot backend */}
            <div className="basis-1/2 text-sm text-center font-thin"> 5.8/6.0 </div> {/* Må kobles opp mot backend */}
            <div className="basis-1/2 text-base text-center font-normal"> The Washington Post </div> {/* Må kobles opp mot backend */}
            </div>
          </div>

          <div className="flex flex-row py-2">
            <div className="basis-full text-base p-4 font-thin"> {/* Må kobles opp mot backend */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet dolor ultricies,
            viverra elit ut, condimentum odio. Mauris pretium congue ante a tempus. In convallis dignissim neque, 
            sit amet dapibus lacus volutpat eget. Nulla mattis ultricies efficitur. Fusce odio orci, rhoncus blandit viverra id, 
            sagittis sed nibh. Sed molestie vehicula tincidunt. Maecenas tempus, dui at placerat facilisis, nunc dui fringilla diam, 
            sollicitudin dictum mauris quam vitae odio. Cras blandit tincidunt nisl vel elementum. Maecenas aliquam eros quis lobortis 
            volutpat. Nam ac laoreet lorem, in consectetur lorem.
            <div className="basis-1/2 text-sm italic pt-4">Fantasy</div> {/* Må kobles opp mot backend */}
            </div>
          </div>

          <div className="flex flex-row py-2">
            <div className="basis-1/2 text-center ">Professional ratings:
            <div className="basis-1/2 text-center ">5.7/6.0</div> {/* Må kobles opp mot backend */}
            </div> 
            <div className="basis-1/2 text-center ">Reader ratings:
            <div className="basis-1/2 text-center ">5.9/6.0</div> {/* Må kobles opp mot backend */}
            </div>
        </div>

        </div>
      </div>
  </section>
);

import React, { Component } from 'react';
import Shelf from './Shelf';


class Shelves extends Component {

    render() {
        //Shelves
        const Books = this.props.books;
        const currentlyReading = Books.filter(book => book.shelf === "currentlyReading");
        const wantToReading = Books.filter(book => book.shelf === "wantToRead");
        const read = Books.filter(book => book.shelf === "read");
        console.log(Books);
        return (
            <div className="list-books-content">
              <div>
            {/*shelf*/}
            {/*<shelf/> read*/}
            {/*<shelf/> want to reading*/}
            {/*<shelf/> currently reading*/}

               	<Shelf 
               		books={currentlyReading} 
               		title={"currently Reading"} 
               		changeshelf ={this.props.changeshelf}
               	/> 
                 {/*shelf want to read*/}
              	<Shelf 
              		books={wantToReading} 
              		title={"Want to Read"} 
              		changeshelf ={this.props.changeshelf}
              	/> 
                 {/*shelf read*/}
                <Shelf 
                	books={read} 
                	title={"Read"} 
                	changeshelf ={this.props.changeshelf}
                /> 

              </div>
            </div>



        )
    }

}
export default Shelves;
import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './components/Shelves'
import Search from './components/Search'
import SearchBtn from './components/SearchBtn';
import AppHeader from './components/AppHeader';

import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
        books: [],
    }



    conponentDidMount() {
        BooksAPI.getAll().then((books) => (
            this.state(() => ({
                books: books
            }))
        ))

    }


    changeBookShelf = (book, shelf) => {
        BooksAPI.update(book)
            .then((books) => {
                this.setState(() => ({
                    books: books
                }))
            })

    }


    render() {
        return (
            <div className="app">
              <Route path='/search' render={({history})=>(
       
                <Search   books={this.state.books}/>
          
              )}/>
           
              <Route exact path='/' render={() => (
              <div className="list-books">
              
                <AppHeader/>
                <Shelves 
                  books={this.state.books}
                  changeshelf ={this.changeBookShelf}
                />
             
                <SearchBtn/>
            
              </div>
        )
    }
    /> < /
    div >
)
}
}

export default BooksApp
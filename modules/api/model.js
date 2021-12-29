var restler = require('restler');
const { error } = require('winston');
const db = require('../../database/mysql');

const movie=db.movieData;
const acheive=db.archeive;
const book = db.books;
const populer= db.populer;

  const google= (req, res)=> {
    var url = 'http://google.com';
    restler.get(url).on('complete', function(result) {
      if (result instanceof Error) {
        console.log('Error:', result.message);
      }
      else {
        res.json(result);
        console.log(url)
      }
    });
  };



  const archive= (req, res)=> {
    var url = 'https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=o23Yhe4RiJCp3MtmhIMzZmbAxEAXb7Op';
    restler.get(url).on('complete', function(result) {
      if (result instanceof Error) {
        console.log('Error:', result.message);
      }
      else {
        res.json(result);
        console.log("result",result.response.docs[1].multimedia[0].subtype)
        const Data = acheive.create({
          subtype:result.response.docs[1].multimedia[0].subtype ,
          type: result.response.docs[1].multimedia[0].type,
          url: result.response.docs[1].multimedia[0].url,
          height: result.response.docs[1].multimedia[0].height,
          width: result.response.docs[1].multimedia[0].width ,
          crop_name: result.response.docs[1].multimedia[0].crop_name ,
      });
      
      if(!Data)return error;
      else{
        console.log("data saved");
      }
        }
    });
  };

  const books= (req, res)=> {
    var url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=o23Yhe4RiJCp3MtmhIMzZmbAxEAXb7Op';
    restler.get(url).on('complete', function(result) {
      if (result instanceof Error) {
        console.log('Error:', result.message);
      }
      else {
        res.json(result);
        console.log(url)
        const bookData = book.create({
          list_name:result.results.list_name,
          bestsellers_date: result.results.bestsellers_date,
          published_date: result.results.publication_date,
          rank: result.results.books[0].rank,
          description: result.results.books[0].description,
          author_name: result.results.books[0].author,
      });
      
      if(!bookData)return error;
      console.log("data saved in DB")
      }
    });
  };

  const mostpopular= (req, res)=> {
    var url = 'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=o23Yhe4RiJCp3MtmhIMzZmbAxEAXb7Op';
    restler.get(url).on('complete', function(result) {
      if (result instanceof Error) {
        console.log('Error:', result.message);
      }
      else {
        res.json(result);
        console.log(url)
        console.log("result",result)
        const Data = populer.create({
          url:result.results[0].url,
          source: result.results[0].source,
          published_date: result.results[0].published_date,
          title: result.results[0].title,
          abstract: result.results[0].abstract,
      });
      
      if(!Data)return error;
      else{
      console.log("data saved in DB");
      }
      }
    });
  };

  
  const movies= async (req, res)=> {
    var url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=o23Yhe4RiJCp3MtmhIMzZmbAxEAXb7Op';
    restler.get(url).on('complete', function(result) {
      if (result instanceof Error) {
        console.log('Error:', result.message);
      }
      else {
        res.json(result);
        const MovieData = movie.create({
          display_title:result.results[1].display_title ,
          headline: result.results[1].headline ,
          publication_date: result.results[1].publication_date ,
          opening_date: result.results[1].opening_date ,
          date_updated: result.results[1].date_updated ,
      });
      
      if(!MovieData)return error;
      console.log("data saved in DB")
      
      }
    });
  };

  module.exports={
      google,
      archive,
      books,
      mostpopular,
      movies
  }

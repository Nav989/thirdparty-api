var restler = require('restler');
const { error } = require('winston');
const db = require('../../database/mysql');

const movie=db.movieData;

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
        console.log(url)
        console.log("result",result)
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
        console.log("result",result)
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
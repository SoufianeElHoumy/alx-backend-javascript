/**
 * Contains the miscellaneous route handlers.
 * @author Soufiane El Houmy <https://github.com/SoufianeElHoumy>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;

CREATE DATABASE Portfolio;
CREATE TABLE Projects(
  Id int NOT NULL AUTO_INCREMENT,
  Title varchar(255) NOT NULL,
  Description varchar(255) NOT NULL,
  Thumbnail varchar(255) NOT NULL,
  Url varchar(255) NOT NULL,
  PRIMARY KEY (Id)
);
INSERT INTO Projects (Title, Description, Thumbnail, Url) VALUES ('argentina activista', 'thumbail argentina activista page', 'argact-page.png', 'https://gabit690.github.io/web-argentina-activista/');
INSERT INTO Projects (Title, Description, Thumbnail, Url) VALUES ('calculator', 'thumbail calculator page', 'calculator-page.png', 'https://gabit-javascript-calculator.netlify.app/');
INSERT INTO Projects (Title, Description, Thumbnail, Url) VALUES ('contacts', 'thumbail contacts page', 'contacts-page.png', 'https://administrador-de-contactos.herokuapp.com/');
INSERT INTO Projects (Title, Description, Thumbnail, Url) VALUES ('counter', 'thumbail counter page', 'counter-page.png', 'https://contador-react-redux.herokuapp.com/');
INSERT INTO Projects (Title, Description, Thumbnail, Url) VALUES ('drag and drop', 'thumbail drag and drop page', 'dragdrop-page.png', 'https://html-w3schools-projects.web.app/projects/drag-and-drop/drag-and-drop.html');
INSERT INTO Projects (Title, Description, Thumbnail, Url) VALUES ('database', 'thumbail database page', 'database-page.png', 'https://practice-php-gabit.000webhostapp.com/tables/input.php');
INSERT INTO Projects (Title, Description, Thumbnail, Url) VALUES ('dexter', 'thumbail dexter page', 'dexter-page.png', 'https://dibujo-dexter.web.app/');
INSERT INTO Projects (Title, Description, Thumbnail, Url) VALUES ('documentation', 'thumbail documentation page', 'documentation-page.png', 'https://gabit690.github.io/FCC-documentacion/');
INSERT INTO Projects (Title, Description, Thumbnail, Url) VALUES ('house', 'thumbail house page', 'house-page.png', 'https://dibujo-parents-house.web.app/');
INSERT INTO Projects (Title, Description, Thumbnail, Url) VALUES ('markdown', 'thumbail markdown page', 'markdown-page.png', 'https://fcc-md-previewer.herokuapp.com/');
INSERT INTO Projects (Title, Description, Thumbnail, Url) VALUES ('storage', 'thumbail storage page', 'storage-page.png', 'https://gabit690.github.io/web-localStorage/');
INSERT INTO Projects (Title, Description, Thumbnail, Url) VALUES ('svg', 'thumbail svg page', 'svg-page.png', 'https://html-w3schools-projects.web.app/projects/svg/svg.html');
INSERT INTO Projects (Title, Description, Thumbnail, Url) VALUES ('tribute', 'thumbail tribute page', 'tribute-page.png', 'https://gabit690.github.io/FCC-Pagina-Tributo/');
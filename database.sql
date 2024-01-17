CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.');
('images/drax image.webp', 'Drax the Destroyer!!', 'Image of Drax not destroying things');
('images/Rocket-raccoon-has-his-very-own-guardians-of-the-galaxy-poster-preview.webp', 'Rocket Raccoon', 'Rocket is a raccoon?');
('images/StarLord.jpeg', 'Peter Quill', 'Image of StarLord'); 
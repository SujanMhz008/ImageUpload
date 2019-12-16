var express = require('express');

var imageController = require('./controllers/imageController.js');

const swaggerjsdoc = require('swagger-jsdoc');

const swaggerUIExpress = require('swagger-ui-express');

var app = express();

var swaggerDefinition = {
	info: {
		title: 'Image Docs',
		version: '0.0.1',
		description: 'This is for image documentaion'
	},
	securityDefination: {
			bearerAuth:{
				type: 'api',
				name: 'authorization',
				scheme: 'bearer',
				in: 'header'
			}
	},
	host: 'localhost:3021',
	basePath: '/'
}


var swaggerOptions = {
	swaggerDefinition,
	apis: ['./index.js']
}

var swaggerSpecs = swaggerjsdoc(swaggerOptions);

app.use('/api-docs', swaggerUIExpress.serve, swaggerUIExpress.setup(swaggerSpecs));

/**
* @swagger
* /image:
*  post:
*   tags:
*    - Image
*   description: Testing
*   produces:
*    - application/json
*   consumes:
*    -form-data
*   parameters:
*    - name: image
*      in: formData
*      required: true
*      requestBody:
*       content:
*        image/png:
*         schema:
*          type: string
*          format: binary
*      description: Select image
*   responses:
*    300:
*     description: Image uploaded successfully
*    500:
*     description: Couldn't upload image
*/

app.post('/image',imageController.imageName, imageController.uploadImage);

/**
* @swagger
* /images:
*  post:
*   tags:
*    - Images
*   description: Testing
*   produces:
*    - application/json
*   consumes:
*    -form-data
*   parameters:
*    - name: images
*      in: formData
*      required: true
*      requestBody:
*       content:
*        image/png:
*         schema:
*          type: string
*          format: binary
*      description: Select images
*   responses:
*    300:
*     description: Images uploaded successfully
*    500:
*     description: Couldn't upload images
*/
app.post('/images', imageController.imageNames, imageController.uploadImages);

app.listen('3021');
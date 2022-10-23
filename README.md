# 2022_01d_ar_webxr
#### `ShapeAR.html` code is adapted from the Three.js repo example here: https://github.com/stemkoski/AR-Examples/blob/master/refraction.html

#### My design document for the proposed "experience" I will be developing is here: https://docs.google.com/document/d/1_j3K9mMhZ7Otm19FaLptunAWWm74WjgiXb6EoAhWMyc/edit?usp=sharing

#### To run the AR example on your desktop:

1. Install VS Code if you don't have it already.
2. Install the "Live Server" extension.
3. Right click on the `ShapeAR.html` file in VS code and select "Open with Live Server".
4. Allow browser to access your camera if prompted.
5. Print out or open the following image with another device: https://stemkoski.github.io/AR-Examples/markers/hiro.png
6. Hold the image up in view of your camera.
7. A couple of shapes should render where the image is being held.

#### To run the AR example on your iPhone:
1. Install OpenSSL
    1. Run openssl.exe that comes with Git `C:\Program Files\Git\usr\bin\openssl.exe`
2. Generate keys:
    1. Use the following commands to generate the certificate and keys
	`openssl genrsa -out key.pem`
	`openssl req -new -key key.pem -out csr.pem`
	`openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem`
	`rm csr.pem`
3. Modify settings.json:
	1. Create a directory called .vscode/
    2. Create a file called settings.json in this directory and paste the following code into it:
    `{
        "liveServer.settings.https": {
            "enable": true, //set it true to enable the feature.
            "cert": "C:\\Users\\tayle\\OneDrive\\Documents\\School\\SER 401\\Group Project\\2022_01d_ar_webxr\\cert.pem", //full path of the certificate
            "key": "C:\\Users\\tayle\\OneDrive\\Documents\\School\\SER 401\\Group Project\\2022_01d_ar_webxr\\key.pem", //full path of the private key
            "passphrase": "hello"
        }
    }`
    3. change cert and key fields to the full path of the location of those files (these are the keys generated in the step above)
	4. Change passphrase to the passphrase you used for the key
4. Start Server (on computer):
	1. Install the "Live Server" extension in VS Code
	2. Right click on your html file in VS Code and select Open with Live Server
5. Access website (on iPhone, in Safari):
	1. Make sure your phone is on the same network as your server.
	2. Navigate to website https://192.168.0.2:5500/ShapeAR.html (you must use your computer's IP address and the port number used by the live server)

	

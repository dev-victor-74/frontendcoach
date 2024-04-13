/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns:[
          { 
          protocol:"https",   
          hostname:  "images.pexels.com",
          port:""
         },
          { 
            protocol:"https",   
            hostname:  "avatars.githubusercontent.com",
            port:""
           }
          ,
          { protocol:"https",
            hostname:"images.unsplash.com",
            port:""
          },
          { protocol:"https",
            hostname:"firebasestorage.googleapis.com",
            port:""
        }
        ]
    }
}


module.exports = nextConfig

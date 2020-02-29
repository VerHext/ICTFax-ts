# ICTFax-ts
ICTFax API library for typescript

## Installation

```shell
$ npm install ictfax-ts
```

### How to

The npm package is a javascript library with typescript types.
You can use this for the open source fax server: [https://ictfax.org/](https://ictfax.org/)

This ia not an offical lib, So not all function are implemented.
Here is the official api doc: https://ictfax.com/fax-rest-api-guide.html


## Example 

```javascript
import { IctFaxClient } from 'IctFaxClient';

(async () => {

    const client = new IctFaxClient("http://fax1.example.com")
    var auth = await client.login({
        username: "admin",
        password: "",
    });
    if (auth){
        console.log("> Auth successful!")

        var accounts = await client.GetAllAccounts();
        accounts.forEach(function(user: User){
            console.log(" > User " + user.username)
        })        

    }else{
        console.log("> Auth failed!")
    }
})();

```

## License
MIT 
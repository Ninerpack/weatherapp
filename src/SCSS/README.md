When writing scss:
    - You can nest divs etc.
    - For example: 

    HTML: 

    <div className='div1'> 
        <div className='div1'>
        </div>
    </div>

    SCSS: 

    .div1 {
        .div2{
        }
    }


    Usually normal css would look like: 

    .div1{

    }

    .div2{
        
    }

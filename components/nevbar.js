let nevbar=()=>{
    return `
    <div id="nevbar">
    <div id="nevbarP1">
    <div>
        <h2>SkinStore</h2>
        <p>part of the LOOKFANTASTIC group</p>
        </div>
   
        <div><input type="text" placeholder="Search for product or brand" ></div>
        <div>
            <img src="data:image/png;base64,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" alt=""><h3>Account</h3></div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJWwnh9QdBmZzmeiYMRPDKNWnks_8rqQeAS4-I3FXY5ErVg6zuFzXZJbro8G-IF1_o6o&usqp=CAU" alt=""><h3>Cart</h3></div>
</div>


<hr>
<div id="nevbarP2">
<div>Brands </div>
<div id="BoSS" >Best of SkinStore</div>
<div id="SShop">Summer Shop</div>
<div id="Sale">Sale</div>
<div id="BAR">Build a Routine</div>
<div id="SC">Skin Care</div>
<div id="HR">Hair</div>
<div id="MK">Makeup</div>
<div id="TS">Tools</div>
<div>Bath & Body</div>
<div>Self-Care</div>
<div>Fragrance</div>
<div>New & Trending</div>
<div>Advice</div>
</div>



</div>
<div id="nevbar2">
    <div> &#9951; FREE US Shipping Over $49</div>
<div>  &#9410; Refer a Friend, Get $15</div>
<div>&#xf07a; New Customers Save 20% - Use Code NEWBIE</div>
<div> &#128242; Download Our App</div>
</div>

<div id="nevbar3"><h3>Upto 25% off with code LABOR + 12-Piece beauty bag (Worth $93)@ $130 | Shop now></h3></div>
<div id="BoSS-h">
<hr>
<h4><a href="asfdg.html"> Winning Categories</a></h4>

    <p>Smart Splurges</p> 
    <p>Budget Friendly Finds</p>
    <p>One Step Solutions</p> 
    <p>No Makeup Makeup</p>
    <p>Clarify, Calm, & Correct</p>
    <p>Stay Timeless</p>
    <p>Total Body Beauty</p>
    <p>Hair - Body and Density</p>
    <p>Hair - Smooth and Soften</p>
    <p>Hair - Master your blowout</p>
    <p>Treat Yourself</p>
    <p> On the Go</p>
   
</div>

<div id="sale">
<div> <img src="https://s1.thcdn.com/navigation/121/2019/08/%24-20190803-20190803.png" alt="">Sale </div>
<div>Key Workers Discount</div>
<div>Refar A Friend</div>
<div><img src="https://s1.thcdn.com/navigation/121/2019/11/2918246-200-20191108.png" alt="">Clearance</div>
<div><img src="https://s1.thcdn.com/navigation/121/2019/11/2918246-200-20191108.png" alt="">Gifts and Sets</div>
<div><img src="https://s1.thcdn.com/navigation/121/2019/07/Coupon-20190718.jpg" alt="">All Coupons</div>
<div><img src="https://s1.thcdn.com/navigation/121/2019/08/Label-20190803-20190803.png" alt="">Featured Offers</div>
</div>

<div id="SummerShop">
        <div><hr> <h4>Top Categories</h4>
        <p> Sunless Tanning</p>
        <p>Hair Care</p> 
        <p>Skincare</p>  
        <p>Summer Scents</p>  
        <p>Expert's Top Picks</p> 
        <p> Body Care</p> Body Care
        <p>Skin Correcting Tools</p> </div>
        <div><hr>
            <h4>Trending: SPF</h4>
        <p>Take the SPF Quiz</p>  
        <p>SPF 30 and over</p>  
        <p>SPF 50 and over</p> 
        <p>After Sun</p>  
        <p>Tinted</p> 
        <p>Mineral</p>  
        <p>Eye Protection</p> </div>
        <div><hr>
        <h4>On the Blog</h4>
        <p>How to Choose The Right SPF</p>
        <p>Best Self Tanners for Summer</p>
        <p>Summer Beauty Tricks</p>
        <p>How to Get Glowing Skin This Summer</p>
        <p>Summer Hair</p> 
    </div>
    </div>



    <div id="BuildaRoutine">
    <div><hr>
    <h4>Skin Type Routines</h4>
    <p>Dry Skin Routine</p>
    <p>Normal Skin Routine</p>
    <p>Oily Skin Routine</p>
    <p>Combination Skin Routine</p>
    <p>Sensitive Skin Routine</p> </div>
    <div><hr>
    <h4>Skin Concern Routines</h4>
    <p>Acne Routine</p>
    <p>Fine Lines & Wrinkles Routine</p>
    <p>Dark Spots & Discoloration Routine</p>
    <p>Redness & Rosacea Routine</p>
    <p>Dullness & Brightening Routine</p> </div>
    <div><hr>
    <h4>Build a Hair Routine</h4>
<p>Fine, Thinning Hair Routine</p>
<p>Healthy Scalp Routine</p>
<p>Colored Hair Routine</p>
<p>Dry, Damaged Hair Routine</p>
<p>Oily Hair Routine</p>
<p>Hair Styling Routine</p>
</div>
</div>



<div id="SkinCare">
    <div><hr>
    <h4>Popular Categories</h4>
    <p>View All Skin Care</p>
    <p>New In</p>
    <p>Clean Skincare</p>
    <p>5* Rated Products</p>
    <p>Gifts & Sets</p>
    <p>Supersizes & Duo</p>
    <p>Travel Sizes</p> </div>
    <div><hr>
    <h4>By Product Type</h4>
    <p>Cleansers</p>
    <p>Moisturizers</p>
    <p>Serums</p>
    <p>Eye Serum</p>
    <p>Exfoliators</p>
    <p>Masks</p>
    <p>Eye Care</p>
    <p>Toners</p>
    <p>Lip Care</p>
    <p>Oils</p>
    <p>Treatments</p>
    <p>Mists</p>
    <p>Self Tanning</p>
    <p>Tools</p></div>
    <div><hr>
    <h4>By Ingredient</h4>
    <p>Vitamin C</p>
    <p>AHA</p>
    <p>Caffeine</p>
    <p>Retinol</p>
    <p>Hyaluronic Acid</p>
    <p>Niacinamide</p>
    <p>Lactic Acid</p>
    <p>Salicylic Acid</p>
    <p>Glycolic Acid</p>
    <p>Azelaic Acid</p>
</div>
<div><hr>
<h4>By Specific Concern</h4>
<p>Acne & Blemishes</p>
<p>Fine Lines & Wrinkles</p>
<p>Dark Circles</p>
<p>Dry Skin</p>
<p>Dullness</p>
<p>Lack of Firmness</p>
<p>Pigmentation</p>
<p>Pregnancy Skincare</p>
<p>Redness & Rosacea</p>
<p>Sensitive Skin</p>
<p>Visible Pores</p> </div>
<div><hr>
<h4>Sunscreen & Suncare</h4>
<p>Take The SPF Quiz</p>
<p>SPF 30 and over</p>
<p>SPF 50 and over</p>
<p>After Sun</p>
<p>Tinted</p>
<p>Mineral</p>
<p>Eye Protection</p> </div>
</div>



<div id="Hair">
    <div><hr>
    <h4>Popular Categories</h4>
    <p>View All Hair Care</p>
    <p> New In</p>
    <p>Clean Hair Care</p>
    <p>5* Rated Products</p>
    <p>Gifts & Sets</p>
    <p>Travel Sizes</p>
    <p>Supersize & Duos</p> </div>
    <div><hr>
    <h4>Product Type</h4>
    <p>Shampoo</p>
    <p>Conditioners</p>
    <p>Hair Treatments</p>
    <p>Hair Masks</p>
    <p>Hair Oils</p>
    <p>Hair Sprays</p>
    <p>Hair Styling</p>
    <p>Hair Thinning & Loss</p>
    <p>Hair Color Treatments</p>
    <p>Hair Supplements</p>
    <p>Hair Brushes & Combs</p></div>
    <div><hr>
    <h4>Hair Type</h4>
    <p>Anti-Dandruff & Scalp Care</p>
    <p>Coarse & Textured Hair</p>
    <p>Colored Hair</p>
    <p>Curly & Wavy Hair</p>
    <p>Damaged Hair</p>
    <p>Dry Hair</p>
    <p>Fine Hair</p>
    <p>Oily Hair</p>
</div>
<div><hr>
<h4>Electrical</h4>
<p>Flat Irons</p>
<p>Hair Dryers</p>
<p>Rollers & Curling Tongs</p> </div>
<div><hr>
<h4>Hair Removal</h4>
<p>Hair Removal Devices</p>
<p>Hair Removal Products</p>
<p>Men's Shaving Products</p> </div>
</div>



<div id="Makeup">
    <div><hr>
    <h4>Popular Categories</h4>
  
<p>View All Cosmetics</p>
<p>New In</p>
<p>Clean Makeup</p>
<p>5* Rated Products</p>
<p>Gifts & Sets</p>
<p>Brushes & Applicators</p>
<p>Makeup palettes</p>
<p>Nails</p> </div>
    <div><hr>
    <h4>Eyes</h4>
    <p>Eye Liners</p>
    <p>Lash & Brow Enhancers</p>
    <p>Eye Shadows</p>
    <p>Mascaras</p>
    <p>Brow Pencils</p></div>
    <div><hr>
    <h4>Face</h4>
    <p>BB & CC Cream</p>
    <p>Blushers</p>
    <p>Bronzers</p>
    <p>Color Correctors</p>
    <p>Concealers</p>
    <p>Contour</p>
    <p>Face Powders</p>
    <p>Foundations</p>
    <p>Highlighters</p>
    <p>Makeup Removers</p>
    <p>Makeup Setting Spray</p>
    <p>Primers</p>
    <p>Tinted Moisturizer</p>
</div>
<div><hr>
<h4>Lips</h4>
<p>Lipsticks</p>
<p>Lip Balms</p>
<p>Lip Glosses</p>
<p>Lip Liners</p>
<p>Lip Plumpers</p>
<p>Liquid Lipsticks</p> </div>
<div>




<div id="Tools">
    <div><hr>
    <h4>Popular Categories</h4>
  
    <p>View All Tools</p>
    <p>Makeup Brushes & Accessories</p> </div>
    <div><hr>
    <h4>Hair Care</h4>
   <p> Hair Dryers<p/>
    <p>Flat Irons</p>
    <p>Rollers & Curling Irons</p>    
    <p> Brushes</p></div>
    <div><hr>
    <h4>Skincare</h4>
<p>LED Light Therapy</p>
    <p>Facial Toning</p>
    <p>Cleansing</p>
    <p>Dermabrasion</p>
</div>
<div>

`;
}
export default nevbar;//Defolt export
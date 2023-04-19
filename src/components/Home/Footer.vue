<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur nulla et nisi malesuada, vel vulputate nunc feugiat.</p>
        </div>
        <div class="col-md-4">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Flights</a></li>
            <li><a href="https://www.booking.com/">Hotels</a></li>
            <li><a href="https://www.moroccocar.com/">Car Rentals</a></li>
            <li><a href="https://www.booking.com/">Vacation Packages</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Subscribe to Our Newsletter</h4>
          <form>
            <!-- <div class="input-group">
              <input type="email" class="form-control" placeholder="Enter your email address">
              <div class="input-group-append">
                <button class="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </div> -->
          </form>
          <ul class="social-icons">
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 50px 0;
}

.footer h4 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 30px;
}

.footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer li {
  margin-bottom: 10px;
}

.footer li a {
  color: #666;
  text-decoration: none;
}

.footer li a:hover {
  color: #000;
}

.footer .form-control {
  border-radius: 0;
}

.footer .btn-primary {
  border-radius: 0;
}

.footer .social-icons {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer .social-icons li {
  display: inline-block;
  margin-right: 10px;
}

.footer .social-icons li:last-child {
  margin-right: 0;
}

.footer .social-icons li a {
  color: #666;
}

.footer .social-icons li a:hover {
  color: #000;
}
</style>

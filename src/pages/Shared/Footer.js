import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <div className='max-w-7xl mx-auto lg:px-6'>
                <footer class="footer p-10 text-base-content">
                    <div>
                        <span class="footer-title">Services</span>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span class="footer-title">Company</span>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Contact</a>
                        <a class="link link-hover">Jobs</a>
                        <a class="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span class="footer-title">Legal</span>
                        <a class="link link-hover">Terms of use</a>
                        <a class="link link-hover">Privacy policy</a>
                        <a class="link link-hover">Cookie policy</a>
                    </div>
                    <div>
                        <span class="footer-title">Newsletter</span>
                        <div class="form-control w-80">
                            <label class="label">
                                <span class="label-text">Enter your email address</span>
                            </label>
                            <div class="relative">
                                <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                                <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </footer>
                <div class="divider"></div>
                <p className='text-center mb-6'><small>Copyright © 2022 - All right reserved by Utsobe 俊哲</small></p>
            </div>
        </div>
    );
};

export default Footer;
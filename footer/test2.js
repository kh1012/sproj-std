function FooterCopyright() {
  const footer = document.getElementById('footer-copyright');
  footer.innerHTML = "Copyright © SINCE 1989<br />MIDAS Information Technology Co., Ltd.<br />All rights reserved.";
  footer.style.color = '#fff';
  footer.style.fontSize = '1.25rem';
  footer.style.lineHeight = '2.5rem';
  footer.style.fontWeight = '700';
  footer.style.textAlign = 'center';
  footer.style.padding = '1rem 0rem 2rem 0rem';
}

export default FooterCopyright;
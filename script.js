const p = PORTFOLIO;
const gh = `https://github.com/${encodeURIComponent(p.githubUsername)}`;
const setText = (id, value) => document.getElementById(id).textContent = value;
setText('brand',p.name); setText('display-name',p.name); setText('footer-name',p.name);
setText('about-text',p.about); document.title = `${p.name} — HCI Portfolio`;
const githubLink = document.getElementById('github-link'); githubLink.href = gh;
const emailLink = document.getElementById('email-link');
if(p.email){ emailLink.textContent = 'Email ↗'; emailLink.href=`mailto:${p.email}`; } else emailLink.hidden = true;
const linkedinLink = document.getElementById('linkedin-link');
if(p.linkedin){ linkedinLink.href=p.linkedin; linkedinLink.hidden=false; }
const resumeLink=document.getElementById('resume-link'); if(p.resume){ resumeLink.href=p.resume; resumeLink.hidden=false; }
const grid=document.getElementById('project-grid');
p.projects.forEach(project => {
  const article=document.createElement('article'); article.className='project-card';
  const image=document.createElement('div'); image.className='project-image';
  if(project.image){const img=document.createElement('img');img.src=project.image;img.alt=`${project.title} project visual`;img.loading='lazy';image.appendChild(img);}else{image.textContent=project.number;}
  const content=document.createElement('div');content.className='project-content';
  const category=document.createElement('p');category.className='eyebrow';category.textContent=project.category;
  const heading=document.createElement('h3');heading.textContent=project.title;
  const desc=document.createElement('p');desc.textContent=project.description;
  const tags=document.createElement('div');tags.className='tags';
  project.tags.forEach(t=>{let el=document.createElement('span');el.textContent=t;tags.appendChild(el);});
  const link=document.createElement('a');link.className='text-link';link.textContent='View case study ↗';link.href=project.url || `${gh}/${encodeURIComponent(project.repository)}`;
  content.append(category,heading,desc,tags,link);article.append(image,content);grid.appendChild(article);
});

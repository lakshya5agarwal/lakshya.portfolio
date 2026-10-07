import { profile, projects, featured } from "./data.js";
const $ = s => document.querySelector(s);
const byId = Object.fromEntries(projects.map(p => [p.id, p]));
const sect = k => projects.filter(p => p.section === k);
let items = [], idx = 0;
function card(p, i = 0, cls = "") {
  const b = document.createElement("button"); b.className = "card rv " + cls; b.style.transitionDelay = (i % 4) * 70 + "ms";
  b.innerHTML = `<img loading="lazy" decoding="async" src="${p.images[0].src}" alt="${p.images[0].alt}"><span class="cap"><small>${p.category}</small>${p.title}</span>`;
  b.onclick = () => open(p); return b;
}
function open(p, n = 0) { items = p.images.map(im => ({ ...im, t: p.title, d: p.description })); idx = n; show(); $("#viewer").hidden = false; document.body.style.overflow = "hidden"; $("#viewer .x").focus(); }
function show() { const v = $("#viewer"), it = items[idx]; v.querySelector("img").src = it.src; v.querySelector("img").alt = it.alt;
  v.querySelector("figcaption").innerHTML = `${it.t} · ${idx + 1}/${items.length}<span>${it.d}</span>`; v.querySelector(".pv").style.display = v.querySelector(".nx").style.display = items.length > 1 ? "" : "none"; }
const close = () => { $("#viewer").hidden = true; document.body.style.overflow = ""; };
const step = d => { idx = (idx + d + items.length) % items.length; show(); };
$("#viewer .x").onclick = close; $("#viewer .pv").onclick = () => step(-1); $("#viewer .nx").onclick = () => step(1);
$("#viewer").onclick = e => { if (e.target.id === "viewer") close(); };
addEventListener("keydown", e => { if ($("#viewer").hidden) return; if (e.key === "Escape") close(); if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });

featured.map(id => byId[id]).filter(Boolean).forEach((p, i) => $("#grid").append(card(p, i)));
sect("lakshyas-design").flatMap(p => p.images.map((im, n) => ({ p, im, n }))).forEach(({ p, im, n }, i) => {
  const c = card({ ...p, images: [im], title: im.alt.replace(/\b\w/g, c => c.toUpperCase()) }, i); c.onclick = () => open(p, n); $("#ld-track").append(c); });
// Organisations grouped by client
const orgs = [...new Set(sect("organisations").map(p => p.org))];
orgs.forEach(o => { const list = sect("organisations").filter(p => p.org === o);
  list.forEach((p, i) => { const r = document.createElement("div"); r.className = "org rv";
    r.innerHTML = `<div><div class="meta">${i === 0 ? o : ""}</div><h3>${p.title}</h3><p>${p.description}</p></div><div class="strip ${p.images.length === 1 ? "one" : ""}"></div>`;
    p.images.forEach((im, n) => { const c = card({ ...p, images: [im] }); c.onclick = () => open(p, n); r.querySelector(".strip").append(c); }); $("#org-body").append(r); }); });
[["print", "#print-body"], ["vedanta", "#vedanta-body"], ["college", "#college-body"]].forEach(([k, t]) => {
  const l = sect(k); if (!l.length) return; $("#" + k).hidden = false; l.forEach((p, i) => $(t).append(card(p, i))); });
if (!sect("print").length) $("#print").hidden = true;
const L = $("#links"), add = (t, h, s) => h && L.insertAdjacentHTML("beforeend", `<a class="btn ${s || ""}" href="${h}" target="${h.startsWith("http") ? "_blank" : "_self"}" rel="noopener">${t}</a>`);
add("Email me", profile.email && "mailto:" + profile.email, "solid"); add("WhatsApp", profile.phone && "https://wa.me/" + profile.phone.replace(/\D/g, ""), profile.email ? "" : "solid");
add("Instagram", profile.instagram); add("LinkedIn", profile.linkedin);
$("#y").textContent = new Date().getFullYear();
document.querySelectorAll("section .head,.about>*,.process li,.contact>*").forEach(e => e.classList.add("rv"));
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add("on"), io.unobserve(e.target))), { threshold: .12 });
document.querySelectorAll(".rv").forEach(e => io.observe(e));
if (!matchMedia("(prefers-reduced-motion:reduce)").matches) {
  const pars = [...document.querySelectorAll(".par")]; addEventListener("mousemove", e => { const x = e.clientX - innerWidth / 2, y = e.clientY - innerHeight / 2;
    pars.forEach(p => p.style.translate = `${x * p.dataset.s}px ${y * p.dataset.s}px`); });
  addEventListener("scroll", () => pars.forEach(p => p.style.marginTop = scrollY * p.dataset.s * -3 + "px"), { passive: true });
}
const cur = $(".cursor"); addEventListener("mousemove", e => { cur.style.left = e.clientX + "px"; cur.style.top = e.clientY + "px"; });
document.addEventListener("mouseover", e => cur.classList.toggle("big", !!e.target.closest(".card")));

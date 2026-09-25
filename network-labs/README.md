# RGSV Computer Science — Network Labs

Four self-contained HTML simulations for classroom use. The launch page is `index.html`.

## Published labs

| Page | Source version | Topic |
| --- | --- | --- |
| `lab-01.html` | `RGSV_Network_Lab_01_v2.html` | Install NICs; choose Ethernet, Wi-Fi or fibre-optic links; build a draggable two-floor network. |
| `lab-02.html` | `RGSV_Network_Lab_02_v3.html` | Configure IPv4; use each device's PING panel; animate PING and simulated DHCP. |
| `lab-03.html` | `RGSV_Network_Lab_03_v2.html` | Split a file; add headers and sequence numbers; send by multiple routes; reorder; reform the file; save to the receiver's simulated hard disk. |
| `lab-04.html` | `RGSV_Network_Lab_04_v2.html` | Type a URL and press Go to run the full DNS and HTTP journey; Next step remains available for teaching. |

The four lab files are byte-for-byte copies of the latest versions supplied for publication. No older lab versions are included.

## Use

Open `index.html`, choose a lab, and follow the on-screen controls. Each lab is also a complete standalone HTML file: save it and open it in a modern browser to use it offline. Use the in-app EN/VI button to switch language.

No account, server-side component, package installation or real file upload is required. Simulated network addresses and traffic do not contact devices outside the application. Browser storage may be used for local progress; it is not a server-side student-record system.

## Teaching conventions

Lab 02 uses the destination `255.255.255.255` as a labelled shortcut to a simplified one-round-trip DHCP simulation, not as a claim that real ICMP PING allocates an IP address.

Lab 03 uses simulated 64 KB payload blocks and binary multiples (1 MB = 1,024 KB). Its headers, packet sequence numbering, multipath routing and whole-file reassembly are teaching models, not a byte-exact implementation of TCP/IP. Virtual file sizes are JPG 4 MB, DOCX 1 MB, XLSX 3 MB and MP4 20 MB. Hard-disk saving is simulated; the app does not create a real document on the student's disk.


Lab 04 shows DNS resolving the domain name and the web server returning HTML. Go or Enter runs all six steps automatically; Go also restarts after Pause or Next step. DNS hierarchy, caching, TCP and TLS are outside this simplified model. All websites are virtual.

## Integrity

SHA-256 checksums of the uploaded HTML files:

```
f6562eff28c456728ec9e97a3475c5276001fba5bce472ca876c79d59d72297e  index.html
f2cbccdd3a5c87a66049ececb0a873d1603f0d1c2aef6aaf88a531eff3d79f13  lab-01.html
9655145339aaf38d2cd07bf952cf3efcb9ed5d4ba8857b59779f8c1b3d19f731  lab-02.html
2b22911b64a7020f08202b3a4a1093da78943410bb644bd2039c3fa333ef6671  lab-03.html
2c0e3daa1d20074f99cdc25461e293aeff40edb51e444baeb0681232cc509e88  lab-04.html
```

The existing repository home page and Number Systems Lab are left unchanged.

Pentru a rula simularea se deschide fisierul index.html in
Firefox sau Chrome.
Cu tasta SPACE se poate pune pauza in timpul simularii.

Algoritm:

Am generat date de initializare ruland algoritmul cu parametrul
`phase=1` pentru 30000 de iterații. Datele de initializare sunt:
    - culoarea
    - pozitiile robotilor
    - M : numarul de zone ale spatiului
    - MMP pentru fiecare robot : matrice de probabilitate
    a robotului de a trece din zona i in zona j
    - CP : Probabilitatea de coliziune in fiecare zona.
De asemenea la initializare se calculeaza distributia robotilor
in spatiu si se calculeaza valoarea `alpha` a fiecarui robot dupa
formula: 
alpha[i] = G[i] * distributia[i]; i=1..M

G se calculeaza dupa formula:
    G[i] = CP[i]; i=1..M   daca s-a inregistrat o coliziune
    G[i] = 1 - CP[i]; i=1..M   daca nu s-a inregistrat o coliziune


Cand parametrul `phase` este egal cu 2 se ruleaza simularea.
    Se calculeaza vectorul de probabilitate ca raportul dintre
fiecare valoare alpha si suma tuturor valorilor alpha.
    Se estimeaza zona in care se afla robotul alegand pozitia
cu valoarea maxima din vectorul de probabilitati.
    Se realizeaza o miscarea robotului intr-o directie intamplatoare.
    Se recalculeaza alpha[i] ca produsul dintre suma produselor alpha[j]
si MMP[i][j], si G.

    Algoritmul ruleaza la fiecare frame pana pozitia corecta este gasita,
moment in care robotul se opreste.

Modul de evaluare este chiar simularea 2D in care poate fi observata
functionara algoritmului.

Rezultatele sunt favorabile, intr-un final toti robotii oprindu-se.
Ultimii roboti sunt cei care se opresc mai greu deoarece scad sansele
de a aparea o coliziune.

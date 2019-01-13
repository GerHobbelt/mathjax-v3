/*************************************************************
 *
 *  Copyright (c) 2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {CharMap, AddPaths} from '../../FontData.js';
import {texCaligraphic as font} from '../../../common/fonts/tex/tex-caligraphic.js';

export const texCaligraphic: CharMap = AddPaths(font, {
    0x20: '',
    0x30: '39 213Q39 274 53 319T89 389T139 429T192 448T242 452Q347 452 400 400Q460 335 460 213Q460 -22 250 -22Q39 -22 39 213ZM364 242Q364 279 363 301T355 348T338 385T306 406T254 415Q250 415 245 415T238 416Q217 416 190 404T150 368Q136 339 136 221Q136 114 146 78T200 23Q219 16 250 16Q280 16 299 23Q341 41 352 77T364 221V242',
    0x31: '116 410Q176 412 215 423T269 443T288 453H291Q293 453 301 447V254Q301 62 303 60Q307 52 322 49T394 46Q418 46 422 43T426 23Q426 8 424 4T411 0Q407 0 369 1T258 2T148 1T106 0Q96 0 94 4T91 23Q91 40 95 43T123 46Q180 46 195 49T215 61Q216 63 216 220V376Q192 367 119 364H93L86 371V403L92 410H116',
    0x32: '55 334Q55 386 105 419T236 453Q333 453 390 413T448 307Q448 278 437 256T406 218T365 193T318 172T277 151L248 134Q219 118 191 102T163 84T267 83L382 85H391Q399 99 406 126Q410 143 413 145T429 148Q440 148 442 147T449 139Q449 137 435 73T420 7Q420 6 414 0H233Q94 0 71 0T46 5Q46 5 46 6Q44 8 44 24Q44 39 46 41Q47 44 98 78T212 155T294 212Q347 257 347 304Q347 354 306 380T203 407Q150 407 120 377Q118 375 123 373Q146 362 146 332Q146 315 133 302T101 288Q85 288 70 298T55 334',
    0x33: '69 312Q69 377 122 414T233 452Q333 452 381 409T430 313Q430 268 402 223T311 149L301 144Q307 143 317 140T355 123T402 92T439 44T456 -25Q456 -101 396 -158T241 -216Q154 -216 98 -173T42 -68Q42 -58 44 -50T50 -35T57 -25T66 -17T75 -13T82 -10L87 -8Q92 -7 102 -7Q132 -7 147 -25T162 -66Q162 -112 118 -125L113 -126Q113 -129 127 -140T173 -162T239 -173Q268 -173 292 -158Q345 -124 345 -24Q345 33 329 67Q298 125 229 125H210H172Q166 131 166 142Q166 159 172 161Q178 161 208 164T244 169Q251 169 263 176T291 199T316 245T327 314Q327 413 238 413Q182 413 130 369Q177 350 181 312Q181 289 166 273T125 257Q102 257 86 272T69 312',
    0x34: '163 0Q139 0 109 0T71 -1Q43 -1 36 2T28 15V27V46L190 270Q325 457 330 462Q333 464 352 464H371L377 458V46H464L471 40V6L464 0H377V-65V-108Q377 -131 379 -137T391 -144Q409 -148 446 -148H464Q468 -151 471 -155V-187L464 -194H453Q395 -192 325 -192Q222 -192 210 -194H199L193 -188V-154L199 -148H228Q241 -148 250 -148T265 -146T275 -145T281 -143T284 -141T286 -138T289 -134V0H163ZM295 46V350L75 46H295',
    0x35: '159 -44Q159 -66 145 -80T109 -96H102L107 -105Q148 -173 228 -173Q255 -173 280 -162Q351 -128 351 -6V8Q351 67 344 98T316 151Q288 176 255 176Q175 176 136 109Q129 100 114 100Q97 100 95 106Q93 110 93 277V403Q93 451 98 451Q100 452 103 452Q105 452 124 445T177 431T251 423Q294 423 328 430T380 445T401 453Q410 453 410 435V422Q332 331 203 331Q152 331 140 339Q139 339 139 254V168Q194 214 256 214Q332 214 390 154T448 0Q448 -95 381 -155T229 -216Q153 -216 104 -166T50 -49Q50 -15 66 -1T105 13Q128 13 143 -3T159 -44',
    0x36: '42 313Q42 401 68 472T133 583T215 644T296 665H304Q317 665 329 664T360 657T393 640T418 608T432 557Q432 533 422 519T401 502T380 498Q358 498 343 512T328 550Q328 591 367 601L372 602Q372 604 365 609T341 620T307 626Q260 626 226 600T174 537Q147 483 143 376V356Q192 434 266 434Q317 434 357 409Q406 375 435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM251 396Q211 396 178 354T145 217Q145 159 152 122T166 73T187 47Q216 21 252 21Q294 21 321 47Q342 68 349 99T356 203V232Q356 264 354 285T345 331T322 373T280 395Q274 396 251 396',
    0x37: '75 246Q64 246 62 247T55 255Q55 259 72 357T90 458L94 462H99Q104 463 109 463H121Q128 460 128 452Q128 445 134 441T165 435T233 432T356 431H478L485 425V392L414 298Q408 290 385 260T358 223T337 191T317 154T302 116T289 68T282 14T275 -55T274 -137Q274 -173 272 -177Q262 -216 223 -216Q170 -216 170 -157V-148Q172 -78 189 -12T237 109T288 196T338 266Q345 275 348 279Q395 340 395 342Q396 343 376 343T274 343Q122 342 117 339T103 294T90 248Q88 246 75 246',
    0x38: '69 496Q69 570 124 618T247 666Q321 666 375 624T429 515Q429 468 405 433T320 361L346 344Q385 320 403 301T439 250Q456 212 456 181V172V160Q456 141 449 119T426 71T386 26T326 -8T246 -21Q160 -21 102 30T43 155Q43 265 167 332L176 337L161 347Q105 384 87 423Q69 458 69 496ZM371 513Q371 567 334 596T249 626Q198 626 163 598T127 532Q127 521 129 511T138 492T150 476T167 460T185 447T207 433T228 420L284 384L294 391Q346 424 363 469Q371 486 371 513ZM190 21T250 21T351 56T393 140Q393 180 362 213Q354 221 317 246T246 292L212 313Q210 313 200 307T173 287T142 256T117 212T106 157Q106 100 148 61',
    0x39: '171 -101Q171 -118 163 -130T146 -146T134 -151Q132 -151 132 -152Q132 -154 140 -159T167 -168T206 -173Q274 -173 317 -108Q356 -50 356 79V86L350 77Q308 9 231 9Q150 9 92 81Q42 141 42 228Q42 289 64 333Q93 390 142 421T235 452Q237 452 244 452T255 453Q289 453 321 439T386 391T437 290T457 128Q457 -29 381 -122T206 -216Q148 -216 108 -187T67 -104Q67 -75 84 -62T119 -49Q141 -49 156 -63T171 -101ZM242 46Q293 46 324 94T355 223Q355 323 337 356Q316 401 275 410Q267 412 248 412Q206 412 179 386Q155 360 149 328T143 224Q143 120 163 88Q192 46 242 46',
    0x41: '576 668Q576 688 606 708T660 728Q676 728 675 712V571Q675 409 688 252Q696 122 720 57Q722 53 723 50T728 46T732 43T737 41T743 39L754 45Q788 61 803 61Q819 61 819 47Q818 43 814 35Q799 15 755 -7T675 -30Q659 -30 648 -25T630 -8T621 11T614 34Q603 77 599 106T594 146T591 160V163H460L329 164L316 145Q241 35 196 -7T119 -50T59 -24T30 43Q30 75 46 100T74 125Q81 125 83 120T88 104T96 84Q118 57 151 57Q189 57 277 182Q432 400 542 625L559 659H567Q574 659 575 660T576 668ZM584 249Q579 333 577 386T575 473T574 520V581L563 560Q497 426 412 290L372 228L370 224H371L383 228L393 232H586L584 249',
    0x42: '304 342Q292 342 292 353Q292 372 323 391Q331 396 417 428T533 487Q563 512 563 555V562Q563 575 557 589T530 618T475 636Q429 636 396 613T330 539Q263 446 210 238Q196 183 173 120Q135 31 121 16Q108 1 85 -10T47 -22T32 -10Q32 -5 44 18T77 93T112 206Q135 296 154 395T182 550T191 615Q191 616 190 616Q188 616 179 611T157 601T131 594Q113 594 113 605Q113 623 144 644Q154 650 205 676T267 703Q277 705 279 705Q295 705 295 693Q295 686 288 635T278 575Q278 572 287 582Q336 635 402 669T540 704Q603 704 633 673T664 599Q664 559 638 523T580 462Q553 440 504 413L491 407L504 402Q566 381 596 338T627 244Q627 172 575 110T444 13T284 -22Q208 -22 158 28Q144 42 146 50Q150 67 178 85T230 103Q236 103 246 95T267 75T302 56T357 47Q436 47 486 93Q526 136 526 198V210Q526 228 518 249T491 292T436 330T350 345Q335 345 321 344T304 342',
    0x43: '201 -25Q167 -25 136 -14T75 23T29 94T12 202Q12 290 50 394T161 574Q227 642 303 673T433 704Q435 705 457 705Q533 701 533 640Q533 606 507 548T464 474Q431 444 396 444Q381 444 381 453Q381 459 388 473T407 513T428 563Q433 580 433 594Q433 636 381 636Q314 636 260 594T175 489T128 363T112 247Q112 157 153 101T273 44Q347 44 398 121Q413 144 437 157T481 171Q496 171 496 160Q496 150 476 123Q426 56 350 16T201 -25',
    0x44: '37 475Q19 475 19 487Q19 536 103 604T327 682H356Q386 683 408 683H419Q475 683 506 681T582 668T667 633Q766 571 766 450Q766 365 723 287T611 152T455 57T279 6Q248 1 160 0Q148 0 131 0T108 -1Q72 -1 72 11Q72 24 90 40T133 64L144 68L152 88Q247 328 272 587Q275 613 272 613Q272 613 269 613Q225 610 195 602T149 579T129 556T119 532Q118 530 116 525T113 518Q102 502 80 490T37 475ZM665 407Q665 596 412 613Q403 614 383 614Q370 614 370 612Q370 598 363 542T323 357T242 103L228 69H265Q391 73 481 119Q536 148 575 188T633 268T658 338T665 392V407',
    0x45: '144 470Q144 556 240 630T451 705Q564 705 564 637Q564 611 540 573Q529 559 505 547T464 534Q448 534 448 545Q448 552 455 562Q463 577 463 591Q463 600 462 604T456 616T436 627T400 635Q396 635 390 635T380 636Q291 636 258 568Q245 544 245 516Q245 463 290 438T391 410Q415 410 415 398Q415 392 407 380T376 356T326 341Q288 340 260 327Q218 311 187 276T143 208T130 151Q130 113 156 88T211 55T268 47Q349 47 403 125Q415 144 439 157T483 171Q499 171 499 160Q499 148 475 120T413 59T315 3T197 -22Q124 -22 77 14T30 105Q30 126 39 154T66 216T122 288T209 354L223 362Q144 400 144 470',
    0x46: '199 579Q181 579 181 590Q181 598 188 611T212 639T260 666T335 682Q336 682 349 682T383 682T431 682T493 683T561 683Q776 682 784 681Q826 673 829 647Q829 620 797 600T744 580Q728 580 728 595Q729 607 713 610Q698 613 598 614H500L499 610Q499 598 467 486T428 367Q428 365 551 365H674Q683 360 684 355Q687 346 677 329Q666 312 642 299T598 285Q586 285 582 296H402L394 277Q386 258 373 229T346 167T315 102T286 51Q265 22 225 -5T133 -32Q108 -32 87 -25T54 -7T33 15T21 35T18 47Q18 60 44 80T98 103Q108 103 111 101T119 88Q130 66 150 54T179 39T195 37Q199 37 203 43Q217 67 245 125T318 300T391 532Q393 543 398 564T406 598T409 613T339 614H269Q229 579 199 579',
    0x47: '216 68Q155 68 115 100T59 177T44 273Q44 299 50 333T73 421T133 533T239 632Q346 704 466 704Q508 704 515 703Q555 696 577 681T599 635Q599 605 570 560T523 496Q490 466 455 466Q440 466 440 475T469 526T499 589Q499 605 489 617Q460 636 403 636Q343 636 295 611T220 548T174 464T150 382T144 318Q144 241 180 189T287 137Q325 137 359 160Q428 205 466 322Q472 342 501 359T551 376Q557 376 560 373T564 368L565 365Q560 341 551 302T512 173T451 31Q359 -119 204 -119Q163 -118 127 -109T74 -91T53 -77Q52 -75 52 -71Q52 -54 79 -35T132 -14H140L151 -19Q210 -49 281 -49H289Q312 -49 329 -31Q351 -7 372 36T405 109T416 142L408 136Q401 131 392 125T369 111T338 96T303 82T261 72T216 68',
    0x48: '18 487Q18 496 29 517T67 566T127 621T216 665T330 683Q359 683 376 669T397 643T400 622Q400 584 382 488T348 343Q348 342 467 342H587L594 366Q615 440 648 534T690 641Q701 656 723 669T764 683Q783 683 783 672L750 578Q716 485 677 346T625 101Q624 92 623 82T622 65T621 56Q621 20 658 20Q666 20 701 25Q709 52 736 69T785 87Q803 87 803 75T791 44T754 3T685 -33T588 -48Q568 -48 562 -46Q522 -31 522 13V23Q531 129 562 250L569 281L565 280Q561 278 556 277T549 274L438 273H328L321 249Q307 202 275 107T232 0Q219 -16 196 -28T155 -41Q149 -41 145 -39T140 -34T139 -29Q139 -24 148 -3T181 86T233 247Q240 270 240 272Q240 273 194 273H169Q139 273 139 285Q139 295 153 308T187 332Q206 341 236 342L260 343L264 359Q278 414 289 482T300 578Q300 613 260 613H254Q198 613 169 592Q148 578 127 544T104 508Q72 478 37 475Q18 475 18 487',
    0x49: '174 0H31Q-13 0 -21 2T-30 12Q-30 23 -17 36Q9 60 42 68L155 70Q187 102 214 179T257 333T302 491T366 610L369 614H305Q221 611 188 607T145 596T128 569Q119 543 94 529T47 512Q28 512 28 524Q28 527 32 539Q56 614 159 654Q218 678 312 682Q314 682 339 682T404 682T481 683H632Q642 678 642 671Q642 657 621 641T577 617Q570 615 507 614H444Q427 592 406 542Q382 478 355 366T310 209Q280 123 238 78L230 69H330Q442 70 442 74Q443 74 443 77T447 87T460 105Q490 134 527 137Q545 137 545 125Q545 120 542 112Q531 78 491 49T399 7Q379 2 360 2T174 0',
    0x4A: '148 78Q148 16 189 -17T286 -50Q319 -50 348 -33T396 10T426 59T444 101L471 204Q498 306 521 372Q575 532 649 605L659 614H591Q517 613 494 607Q433 591 400 550T360 477Q353 454 325 437T275 419Q256 419 260 435Q280 523 376 597T583 681Q603 683 713 683H830Q839 674 839 671Q839 654 810 634T754 614Q735 614 721 601Q688 571 654 495T600 351T561 209T541 132Q507 29 412 -45T213 -119Q141 -119 94 -77T47 33Q47 55 50 69T58 90T71 103Q105 131 135 131Q152 131 152 120Q152 119 151 114T149 99T148 78',
    0x4B: '194 618Q193 618 182 613T156 601T131 594Q113 594 113 605Q113 623 144 644Q154 650 205 676T267 703Q277 705 279 705Q295 705 295 691Q295 569 250 397Q225 306 197 217T151 81T128 25Q120 8 94 -7T47 -22Q32 -22 32 -10L64 76Q95 163 133 295T185 530Q198 611 194 618ZM331 429Q331 383 364 290T449 117T542 36Q574 36 607 51T652 103Q660 124 677 133T709 143Q727 143 727 128Q727 119 723 111Q704 56 639 17T497 -22H493Q463 -22 425 16Q401 40 382 71Q335 138 296 243T256 399Q256 434 288 473Q342 540 471 622T670 705Q691 704 703 696Q732 678 732 644Q732 613 714 600T677 586Q671 586 667 587T660 592T657 604V619Q657 647 629 647Q623 647 620 646Q576 635 495 583T365 482Q331 448 331 429',
    0x4C: '62 -22T47 -22T32 -11Q32 -1 56 24T83 55Q113 96 138 172T180 320T234 473T323 609Q364 649 419 677T531 705Q559 705 578 696T604 671T615 645T618 623V611Q618 582 615 571T598 548Q581 531 558 520T518 509Q503 509 503 520Q503 523 505 536T507 560Q507 590 494 610T452 630Q423 630 410 617Q367 578 333 492T271 301T233 170Q211 123 204 112L198 103L224 102Q281 102 369 79T509 52H523Q535 64 544 87T579 128Q616 152 641 152Q656 152 656 142Q656 101 588 40T433 -22Q381 -22 289 1T156 28L141 29L131 20Q111 0 87 -11',
    0x4D: '28 9Q28 37 43 63T73 90Q77 90 83 84T103 70T141 57H146Q162 57 178 79T222 167Q266 279 295 371T334 513T349 598T358 651T371 677Q397 705 432 705Q442 705 445 699T452 666Q453 661 453 659Q475 538 509 405T568 207L574 192Q581 178 587 164T594 150Q596 150 635 189T693 248Q765 324 863 438T1024 626T1089 701Q1093 705 1100 705Q1111 705 1111 682Q1111 675 1108 660T1099 611T1086 540Q1041 277 1041 144Q1041 98 1044 75T1050 48T1059 42Q1064 41 1075 46Q1102 61 1121 61Q1137 61 1137 50Q1137 28 1087 0T1000 -29Q983 -29 972 -23T955 -9T945 16T942 45T941 83V96Q941 158 952 256T974 422L985 489Q984 489 939 436T821 300T698 164Q665 128 620 85T568 37Q564 34 558 34Q550 34 546 37T535 54Q512 91 496 127T450 259T389 498L384 518Q349 367 294 223T198 15Q155 -50 117 -50Q87 -50 61 -35T30 -6Q28 2 28 9',
    0x4E: '343 705Q358 705 358 698Q360 696 370 658T411 524T484 319Q536 174 590 82L595 73L615 152Q646 274 683 407Q729 571 752 637T799 727Q852 780 937 788Q939 788 947 788T958 789H962Q979 789 979 765Q979 722 951 692Q942 683 924 683Q888 681 859 672T818 654T803 639Q784 608 708 322T631 15Q631 14 630 15Q630 17 629 15Q628 14 628 12Q621 -4 601 -17T560 -31Q550 -31 546 -28T530 -7Q484 67 458 123T398 272Q352 392 314 514L306 535V534Q306 533 296 488T272 379T234 239T185 100T127 -7T61 -50Q34 -50 4 -34T-27 8Q-27 33 -12 61T18 90Q21 90 36 77T87 57H92Q109 57 123 78T162 173Q206 299 232 417T265 599T276 667Q284 681 304 693T343 705',
    0x4F: '308 428Q289 428 289 438Q289 457 318 508T378 593Q417 638 475 671T599 705Q688 705 732 643T777 483Q777 380 733 285T620 123T464 18T293 -22Q188 -22 123 51T58 245Q58 327 87 403T159 533T249 626T333 685T388 705Q404 705 404 693Q404 674 363 649Q333 632 304 606T239 537T181 429T158 290Q158 179 214 114T364 48Q489 48 583 165T677 438Q677 473 670 505T648 568T601 617T528 636Q518 636 513 635Q486 629 460 600T419 544T392 490Q383 470 372 459Q341 430 308 428',
    0x50: '37 475Q19 475 19 487Q19 536 103 604T327 682Q329 682 344 682T380 682T421 683H463Q625 683 695 615Q718 591 726 564Q733 547 733 525Q733 412 607 312T321 205H312Q293 205 293 217Q293 224 302 236T333 260T385 274Q558 287 614 407Q633 445 633 477Q633 515 612 543T556 585T481 607T399 614H370L368 603Q352 463 312 312T242 82T202 -13Q190 -33 164 -45T121 -57Q108 -57 108 -45Q108 -40 120 -10T151 73T192 190T233 349T266 539Q267 546 269 565T272 598T274 613H270Q209 613 163 588Q131 572 113 518Q102 502 80 490T37 475',
    0x51: '114 286Q114 358 151 433T249 569T392 667T558 705Q653 705 713 641T774 460Q774 389 750 322T687 206T600 114T504 46T412 4L399 -2Q542 -62 636 -62Q660 -62 670 -54T686 -27T700 0Q734 34 770 34Q787 34 787 23Q787 -18 720 -74T563 -131Q485 -131 350 -83T145 -34Q127 -34 127 -22Q127 -12 144 5T190 31L200 34L237 35Q386 38 467 79Q550 120 612 210T675 416Q675 510 625 573T484 636Q410 636 346 587T248 469T214 333Q214 306 221 281T243 229T288 188T360 172Q403 172 441 188T490 205Q510 205 510 192Q505 162 432 132T287 102Q206 102 160 155T114 286',
    0x52: '37 475Q19 475 19 487Q19 503 35 530T83 589T180 647T327 682H374Q387 682 417 682T464 683Q519 683 559 679T642 663T708 625T731 557Q731 481 668 411T504 300Q506 296 512 286T528 257T553 202Q594 105 611 82Q635 47 665 47Q708 47 742 93Q758 113 786 128Q804 136 819 137Q837 137 837 125Q837 115 818 92T767 43T687 -2T589 -22Q549 -22 517 22T467 120T422 221T362 273Q346 273 346 287Q348 301 373 320T436 342Q437 342 446 343T462 345T481 348T504 353T527 362T553 375T577 393Q598 412 614 443T630 511Q630 545 613 566T541 600T393 614Q370 614 370 613L366 584Q349 446 311 307T243 96L213 25Q205 8 179 -7T132 -22Q125 -22 120 -18T117 -8Q117 -5 130 26T163 113T205 239T246 408T274 606V614Q273 614 259 613T231 609T198 602T163 588Q131 572 113 518Q102 502 80 490T37 475',
    0x53: '554 512Q536 512 536 522Q536 525 539 539T542 564Q542 588 528 604Q515 616 482 625T410 635Q374 635 349 624T312 594T295 561T290 532Q290 505 303 482T342 442T378 419T409 404Q435 391 451 383T494 357T535 323T562 282T574 231Q574 133 464 56T220 -22Q138 -22 78 21T18 123Q18 184 61 227T156 274Q178 274 178 263Q178 260 177 258Q172 247 164 239T151 227T136 218L127 213L124 202Q118 186 118 163Q120 124 165 86T292 48Q374 48 423 86T473 186V193Q473 267 347 327Q268 364 239 389Q191 431 191 486Q191 547 242 600T356 679T470 705Q472 705 478 705T489 704Q551 704 596 682T642 610Q642 566 621 545Q592 516 554 512',
    0x54: '49 475Q34 475 34 490Q34 552 106 611T261 681Q272 683 507 683H742Q790 717 816 717Q833 717 833 708Q833 682 795 653T714 615Q691 610 588 609Q490 609 490 607L483 580Q476 554 462 496T435 392Q410 289 395 231T363 116T335 34T309 -15T279 -47T242 -64Q231 -68 218 -68Q203 -68 203 -57Q203 -52 211 -38Q224 -7 234 20T251 66T268 123T283 179T304 261T328 360Q342 415 360 488Q380 567 384 582T397 605Q400 607 401 609H302H244Q200 609 188 607T167 596Q145 572 145 541Q145 520 109 498T49 475',
    0x55: '8 592Q8 616 70 649T193 683Q246 683 246 631Q246 587 205 492T124 297T83 143Q83 101 100 75T154 48Q202 48 287 135T450 342T560 553Q589 635 593 640Q603 656 626 668T669 683H670Q687 683 687 672T670 616T617 463T547 220Q525 137 521 68Q521 54 522 50T533 42L543 47Q573 61 588 61Q604 61 604 47Q599 16 506 -22Q486 -28 468 -28T436 -18T421 18Q421 92 468 258Q468 259 467 257T459 248Q426 206 391 167T303 81T194 6T83 -22Q66 -22 58 -20Q25 -11 4 19T-17 99Q-17 146 8 220T64 358T120 488T146 586Q146 604 141 608T123 613H120Q99 613 72 597T25 580Q8 580 8 592',
    0x56: '25 633Q25 647 47 665T100 683Q291 683 291 306Q291 264 288 213T282 132L279 102Q281 102 308 126T378 191T464 279T545 381T596 479Q600 490 600 502Q600 527 581 550T523 577Q505 577 505 601Q505 622 516 647T542 681Q546 683 558 683Q605 679 631 645T658 559Q658 423 487 215Q409 126 308 37T190 -52Q177 -52 177 -28Q177 -26 183 15T196 127T203 270Q203 356 192 421T165 523T126 583T83 613T41 620Q25 620 25 633',
    0x57: '25 633Q25 647 46 665T103 683Q168 683 207 632Q228 608 243 568Q269 485 269 374Q269 324 265 271T256 184L251 150L252 152Q254 153 257 157T264 167T274 180T286 197Q359 293 424 398T519 558T549 616Q549 618 547 624T545 638Q550 654 572 668T615 683Q626 683 632 672T657 595Q726 370 741 128L742 110Q752 122 767 142T823 217T894 321T950 424T976 511Q976 544 958 560T918 577Q906 577 906 602Q906 629 918 651T942 681Q948 683 954 683Q983 683 1008 658T1034 569T999 421T915 257T813 109T724 -3T681 -49Q666 -59 660 -45Q659 -41 657 35T639 233T591 477Q573 551 570 551Q569 551 554 523T507 439T433 315T323 155T182 -25Q160 -52 151 -53Q137 -53 137 -30Q137 -29 148 25T170 168T181 338Q181 424 168 483T131 571T87 609T40 620Q25 620 25 633',
    0x58: '324 614Q291 576 250 573Q231 573 231 584Q231 589 232 592Q235 601 244 614T271 643T324 671T400 683H403Q462 683 481 610Q485 594 490 545T498 454L501 413Q504 413 551 442T648 509T705 561Q707 565 707 578Q707 610 682 614Q667 614 667 626Q667 641 695 662T755 683Q765 683 775 680T796 662T807 623Q807 596 792 572T713 499T530 376L505 361V356Q508 346 511 278T524 148T557 75Q569 69 580 69Q585 69 593 77Q624 108 660 110Q667 110 670 110T676 106T678 94Q668 59 624 30T510 0Q487 0 471 9T445 32T430 71T422 117T417 173Q416 183 416 188Q413 214 411 244T407 286T405 299Q403 299 344 263T223 182T154 122Q152 118 152 105Q152 69 180 69Q183 69 187 66T191 60L192 58V56Q192 41 163 21T105 0Q94 0 84 3T63 21T52 60Q52 77 56 90T85 131T155 191Q197 223 259 263T362 327T402 352L391 489Q391 492 390 505T387 526T384 547T379 568T372 586T361 602T348 611Q346 612 341 613T333 614H324',
    0x59: '65 599Q65 618 107 650T204 683Q267 683 312 643T380 533T414 385T424 217Q424 186 423 160T422 123Q426 123 468 170T567 304T650 469Q661 503 661 519Q661 546 639 570Q615 591 583 591Q569 591 569 616Q569 640 582 661T613 683Q624 683 638 679T671 664T702 625T714 558Q714 472 639 329T426 45Q361 -21 282 -82T154 -143Q97 -143 64 -104T31 -20Q31 4 44 25T70 46Q78 46 81 39T87 16T97 -9Q127 -51 182 -51Q184 -51 187 -50H190Q233 -41 314 25Q330 36 330 40Q336 79 336 178Q336 508 223 594Q199 614 158 619L148 620L139 611Q111 586 83 586Q65 586 65 599',
    0x5A: '694 220Q708 220 708 210Q708 195 695 167T658 105T593 42T502 3Q492 1 458 1Q400 1 293 11T150 22Q116 22 92 11T51 0Q37 0 37 10Q37 21 63 44T179 146T367 319L391 343H343L296 344Q285 350 285 358Q285 365 289 372T300 383T313 392T324 398L329 400H450L561 518Q597 558 607 571L621 587H596Q553 589 484 599T383 609Q342 609 326 596T301 555Q294 533 263 514T208 492Q189 492 189 503Q189 510 197 528T215 559Q249 607 318 645T466 683Q504 683 573 673T669 662L690 661Q734 682 748 683Q767 683 767 673Q767 666 746 640Q655 531 555 428L529 400Q529 399 543 399Q604 397 604 366Q604 350 587 337T551 322Q541 322 539 323Q529 328 529 334Q529 339 487 342L470 343L446 320Q272 153 200 96L235 95Q297 95 392 86T533 74H554Q586 116 597 159Q604 179 635 199T694 220',
    0xA0: '',
    0x391: '208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260',
    0x392: '231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229',
    0x395: '492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213',
    0x396: '58 8Q58 23 64 35Q64 36 329 334T596 635L586 637Q575 637 512 637H500H476Q442 637 420 635T365 624T311 598T266 548T228 469Q227 466 226 463T224 458T223 453T222 450L221 448Q218 443 202 443Q185 443 182 453L214 561Q228 606 241 651Q249 679 253 681Q256 683 487 683H718Q723 678 723 675Q723 673 717 649Q189 54 188 52L185 49H274Q369 50 377 51Q452 60 500 100T579 247Q587 272 590 277T603 282H607Q628 282 628 271Q547 5 541 2Q538 0 300 0H124Q58 0 58 8',
    0x397: '228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 219 683Q260 681 355 681Q389 681 418 681T463 682T483 682Q499 682 499 672Q499 670 497 658Q492 641 487 638H485Q483 638 480 638T473 638T464 637T455 637Q416 636 405 634T387 623Q384 619 355 500Q348 474 340 442T328 395L324 380Q324 378 469 378H614L615 381Q615 384 646 504Q674 619 674 627T617 637Q594 637 587 639T580 648Q580 650 582 660Q586 677 588 679T604 682Q609 682 646 681T740 680Q802 680 835 681T871 682Q888 682 888 672Q888 645 876 638H874Q872 638 869 638T862 638T853 637T844 637Q805 636 794 634T776 623Q773 618 704 340T634 58Q634 51 638 51Q646 48 692 46H723Q729 38 729 37T726 19Q722 6 716 0H701Q664 2 567 2Q533 2 504 2T458 2T437 1Q420 1 420 10Q420 15 423 24Q428 43 433 45Q437 46 448 46H454Q481 46 514 49Q520 50 522 50T528 55T534 64T540 82T547 110T558 153Q565 181 569 198Q602 330 602 331T457 332H312L279 197Q245 63 245 58Q245 51 253 49T303 46H334Q340 38 340 37T337 19Q333 6 327 0H312Q275 2 178 2Q144 2 115 2T69 2T48 1Q31 1 31 10Q31 12 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637',
    0x399: '43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1',
    0x39A: '285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628',
    0x39C: '289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629',
    0x39D: '234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637',
    0x39F: '740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476',
    0x3A1: '287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554',
    0x3A2: '740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM640 466Q640 523 625 565T583 628T532 658T479 668Q370 668 273 559T151 255Q150 245 150 213Q150 156 165 116T207 55T259 26T313 17Q385 17 451 63T561 184Q590 234 615 312T640 466ZM510 276Q510 278 512 288L515 298Q515 299 384 299H253L250 285Q246 271 244 268T231 265H227Q216 265 214 266T207 274Q207 278 223 345T244 416Q247 419 260 419H263Q280 419 280 408Q280 406 278 396L275 386Q275 385 406 385H537L540 399Q544 413 546 416T559 419H563Q574 419 576 418T583 410Q583 403 566 339Q549 271 544 267Q542 265 538 265H530H527Q510 265 510 276',
    0x3A4: '40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40',
    0x3A7: '42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0',
    0x3D2: '45 535Q34 535 31 536T28 544Q28 554 39 578T70 631T126 683T206 705Q230 705 251 698T295 671T330 612T344 514Q344 477 342 473V472Q343 472 347 480T361 509T380 547Q471 704 596 704Q615 704 625 702Q659 692 679 663T700 595Q700 565 696 552T687 537T670 535Q656 535 653 536T649 543Q649 544 649 550T650 562Q650 589 629 605T575 621Q502 621 448 547T365 361Q290 70 290 60Q290 46 379 46H404Q410 40 410 39T408 19Q404 6 398 0H381Q340 2 225 2Q184 2 149 2T94 2T69 1Q61 1 58 1T53 4T51 10Q51 11 53 23Q54 25 55 30T56 36T58 40T60 43T62 44T67 46T73 46T82 46H89Q144 46 163 49T190 62L198 93Q206 124 217 169T241 262T262 350T274 404Q281 445 281 486V494Q281 621 185 621Q147 621 116 601T74 550Q71 539 66 537T45 535',
    0x3DC: '48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1',
},{
});

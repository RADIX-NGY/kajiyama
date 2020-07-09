<!doctype html>
<html lang="ja">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="keywords" content="愛知県、天白区、日進市、新築、中古、リノベーション、マンション、一戸建て、土地、不動産売却、不動産買取、株式会社かじやま不動産">
	<meta name="description"
		content="愛知県の株式会社かじやま不動産は天白区、日進市を中心に新築・中古・リノベーションのマンション・一戸建て・土地を取り扱っております。また、不動産売却・不動産買取をお考えでしたら、かじやま不動産にご相談ください。 お急ぎの売却はもちろん、今すぐの売却でなくともお話を伺いまして査定致します。">
	<meta name="viewport" content="width=1170">
	<meta name="format-detection" content="telephone=no">
	<link rel="icon" href="favicon.ico" type="image/vnd.microsoft.icon">

	<link rel="stylesheet" href="css/base.css">
	<link rel="stylesheet" href="css/content.css">
	<link rel="stylesheet" href="css/fontawesome-all.min.css">

	<link href="css/vegas.min.css" rel="stylesheet">
	<title>かじやま不動産｜マンション、一戸建て、土地などの不動産売却・買取</title>
</head>

<body>
	<header class="header">
		<div class="container">
			<div class="grid-row">
				<div class="col-7">
					<h1><a href="index.html"><img src="images/header_logo.png" width="249" height="43"
								alt="愛知県の株式会社かじやま不動産は天白区、日進区を中心に新築・中古・リノベーションのマンション・一戸建て・土地を取り扱っております。"></a></h1>
				</div>
				<div class="col-5">
					<ul class="header_tel">
						<li><span data-action="call" data-tel="052-800-2103">052-800-2103</span></li>
						<li>営業時間 10:00~19:00<br>
							定休日:水曜日</li>
					</ul>
				</div>
			</div>
		</div>
	</header>

	<nav class="gnav">
		<ul>
			<li class="current"><a href="index.html">ホーム<span class="en">HOME</span></a></li>
			<li><a href="list.html">物件情報<span class="en">List</span></a></li>
			<li><a href="about.html">かじやま不動産について<span class="en">About</span></a></li>
			<li><a href="company.html">会社概要<span class="en">Company</span></a></li>
			<li><a href="contact.html">お問い合わせ<span class="en">Contact</span></a></li>
		</ul>
	</nav>

	<div id="top_scroll2">
		<div class="top_scroll_txt"><img src="images/main-text.png" alt=""></div>
	</div>

	<main>
    <section class="top_news">
			<div class="container">
				<div class="grid-row">
					<div class="top_news_title">
						<div class="top_title02">
							<h2>新着情報<span class="en">Information</span></h2>
						</div>
					</div>
					<div class="top_news_text">
						<dl>
							<?php
						$boxes = $this->requestAction(array('controller'=>'news','action'=>'widget'));
						foreach($boxes as $box):extract($box['CatalogBox'],EXTR_PREFIX_ALL,'tbl');?>
							<dt><?php echo date('Y/m/d', strtotime($tbl_date1));?></dt>
							<dd>
								<?php echo $tbl_html1;?><?php echo $this->Ezm->getNewMark($tbl_new_mark, $tbl_date1, '<span style="color:red;">NEW</span>');?>
							</dd>
							<?php
						  //使った変数を初期化
						  foreach($box['CatalogBox'] as $key=>$data){
						    ${'tbl_'.$key} = null;
						  }
						?>
							<?php
						endforeach;
						?>
						</dl>
					</div>
				</div>
			</div>
		</section>

		<section class="top_contact">
			<div class="container">
				<div class="grid-row">
					<div class="top_contact_text">
						<h2 class="mb15">どんなことでもお気軽にご相談ください！</h2>
						<p>土地、一戸建て、マンションなどの住宅購入、不動産売却・買取をお考えでしたら、<br>かじやま不動産へご相談下さい。<br>
							お急ぎの売却はもちろん、今すぐの売却でなくともお話をお伺いまして査定致します。<br>
							また住宅購入をお考えの方でローンや、資金面にご不安の方も<br>是非お気軽にご相談、お問い合せ下さい。</p>
					</div>
					<div>
						<div class="top_contact_method">
							<dl>
								<dt><img src="images/top_contact_title.png" width="144" height="53" alt="CONTACT"></dt>
								<dd>【営業時間】10:00~19:00<br>
									【定 休 日】水曜日</dd>
							</dl>
							<ul>
								<li><span data-action="call" data-tel="052-800-2103">Tel.052-800-2103</span></li>
								<li><a href="contact.html"><span>お問い合わせ</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="top_list">
			<div class="container">
				<div class="tab_wrap">
					<h2><img src="images/top_list_title.png" width="185" height="205" alt="物件情報"></h2>
					<input id="tab1" type="radio" name="tab_btn" checked>
					<?php
				$categories = $this->requestAction(array('controller'=>'list','action'=>'navi'));
				$tab_count=2;
				foreach($categories as $category):
						$category = $category['CatalogCategory'];
						$cat_titles[$category['id']]=$category['title'];
						$cat_ids[$category['id']]=$category['id'];
					?>
					<input id="tab<?php echo $tab_count;?>" type="radio" name="tab_btn">
					<?php
				$tab_count++;
				endforeach;?>

					<div class="tab_area">
						<label class="tab1_label" for="tab1">ALL</label>
						<?php
					$tab_count=2;
					foreach($categories as $category):
						$category = $category['CatalogCategory'];

						?>
						<label class="tab<?php echo $tab_count;?>_label"
							for="tab<?php echo $tab_count;?>"><?php echo $category['title'];?></label>
						<?php
					$tab_count++;
					endforeach;?>
					</div>
					<div class="panel_area">
						<div id="panel1" class="tab_panel">
							<ul class="grid-row top_list_item">
								<?php
							$boxes = $this->requestAction(array('controller'=>'list','action'=>'widget','conditions'=>array('on_top_page'=>'Y')));
							foreach($boxes as $box):
								extract($box['CatalogBox'],EXTR_PREFIX_ALL,'tbl');
								$cat_arr[$tbl_category_id][] = $box;
								?>
								<li class="col-3">
									<?php if (isset($tbl_word1) && $tbl_word1 == 'Y'):?>
									<span class="icon_sold"><img src="images/top_list_sold.png" alt="売却済み"></span>
									<?php endif;?>
									<?php if (isset($tbl_has_page) && $tbl_has_page == 'Y'):?>
									<a href="list/view/<?php echo $tbl_id;?>">
										<?php endif;?>
										<div class="top_list_img">
											<?php if (!empty($tbl_image1)):?>
											<?php echo $this->element('media', array('var'=>array('id'=>$tbl_image1,'maxwidth'=>260,'maxheight'=>190,'alt'=>$tbl_image1_alt)));?>
											<?php endif;?>
										</div>
										<div class="top_list_text">
											<div><?php echo $tbl_title;?></div>
											<div><?php echo $tbl_text1;?></div>
											<div><?php echo $tbl_text4;?></div>
											<div><?php echo $tbl_text6;?></div>
											<?php if (isset($tbl_has_page) && $tbl_has_page == 'Y'):?>
											<span><img src="images/top_list_arrow.png"></span>
											<?php endif;?>
										</div>
										<?php if (isset($tbl_has_page) && $tbl_has_page == 'Y'):?>
									</a>
									<?php endif;?>
								</li>
								<?php
									//使った変数を初期化
									foreach($box['CatalogBox'] as $key=>$data){
										${'tbl_'.$key} = null;
									}
								?>
								<?php
								endforeach;
								?>
							</ul>
							<div><a href="list.html" class="btn_more">more</a></div>
						</div>


						<?php
					$i=0;
					$tab_count=2;
					foreach($cat_ids as $cat_id):
					?>

						<div id="panel<?php echo $tab_count?>" class="tab_panel">
							<ul class="grid-row top_list_item">
								<?php
							if (!empty($cat_arr[$cat_id])):
							foreach($cat_arr[$cat_id] as $cat):
								extract($cat['CatalogBox'],EXTR_PREFIX_ALL,'tbl');
							?>
								<li class="col-3">
									<?php if (isset($tbl_word1) && $tbl_word1 == 'Y'):?>
									<span class="icon_sold"><img src="images/top_list_sold.png" alt="売却済み"></span>
									<?php endif;?>
									<?php if (isset($tbl_has_page) && $tbl_has_page == 'Y'):?>
									<a href="list/view/<?php echo $tbl_id;?>">
										<?php endif;?>
										<div class="top_list_img">
											<?php if (!empty($tbl_image1)):?>
											<?php echo $this->element('media', array('var'=>array('id'=>$tbl_image1,'maxwidth'=>260,'maxheight'=>190,'alt'=>$tbl_image1_alt)));?>
											<?php endif;?>
										</div>
										<div class="top_list_text">
											<div><?php echo $tbl_title;?></div>
											<div><?php echo $tbl_text1;?></div>
											<div><?php echo $tbl_text4;?></div>
											<div><?php echo $tbl_text6;?></div>
											<?php if (isset($tbl_has_page) && $tbl_has_page == 'Y'):?>
											<span><img src="images/top_list_arrow.png"></span>
											<?php endif;?>
										</div>
										<?php if (isset($tbl_has_page) && $tbl_has_page == 'Y'):?>
									</a>
									<?php endif;?>
								</li>
								<?php
								//使った変数を初期化
								foreach($box['CatalogBox'] as $key=>$data){
									${'tbl_'.$key} = null;
								}
							?>
								<?php

							endforeach;
							endif;
							?>
							</ul>
							<div>
								<a href="list.html?id=<?php echo $cat_id;?>" class="btn_more">more</a>
							</div>
						</div>
						<?php
					$tab_count++;
					endforeach;
					?>
					</div>
				</div>

			</div>
		</section>

		<section class="top_bnr">
			<div class="container">
				<div class="grid-row">
					<div class="top_bnr_title">
						<div class="top_title02">
							<h2>リンク集<span class="en">Link</span></h2>
						</div>
					</div>
					<div class="top_bnr_list">
						<ul>
							<li class="imglink"><a href="https://suumo.jp/" target="_blank"><img src="images/top_llink_bnr01.jpg"
										width="210" height="78" alt="SUUMO スーモ"></a></li>
							<li class="imglink"><a href="https://www.athome.co.jp/ahcb/kajiyama.html" target="_blank"><img
										src="images/top_llink_bnr02.jpg" width="245" height="78" alt="at home アットホーム"></a></li>
							<li class="imglink"><a href="https://www.zentaku.or.jp/" target="_blank"><img
										src="images/top_llink_bnr03.jpg" width="227" height="78" alt="宅建協会"></a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</main>

	<footer class="footer">
		<div class="container">
			<div class="grid-row">
				<div class="col-3">
					<dl>
						<dt><img src="images/footer_logo.png" width="184" height="32" alt="株式会社かじやま不動産"></dt>
						<dd>〒468-0032<br>
							名古屋市天白区山郷町13番地<br>
							Tel.052-800-2103 / Fax.052-800-2107</dd>
					</dl>
				</div>
				<div class="col-6">
					<ul>
						<li><a href="index.html"><i class="fas fa-angle-right"></i>ホーム</a></li>
						<li><a href="list.html"><i class="fas fa-angle-right"></i>物件情報</a></li>
						<li><a href="about.html"><i class="fas fa-angle-right"></i>かじやま不動産について</a></li>
						<li><a href="company.html"><i class="fas fa-angle-right"></i>会社案内</a></li>
						<li><a href="contact.html"><i class="fas fa-angle-right"></i>お問い合わせ</a></li>
					</ul>
				</div>
				<div class="col-3 align-r">
					<p class="copyright">&copy;2018 株式会社かじやま不動産</p>
				</div>
			</div>
		</div>
	</footer>

	<div id="pagetop"><a href="#top"><img src="images/pagetop.png" width="55" height="55" alt="ページトップ"></a></div>

	<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="js/pagetop.js"></script>
	<script src="js/tel.js"></script>

	<script src="js/tab.js"></script>
	<script src="js/vegas.min.js"></script>
	<script>
		$('#top_scroll2').vegas({
			animation: '',/*動き*/
			animationDuration: 5000,/*表示*/
			transitionDuration: 2000,/*遷移時間*/
			slides: [{
				src: 'images/main01.jpg'
			},
			{
				src: 'images/main02.jpg'
			},
			{
				src: 'images/main03.jpg'
			},
			{
				src: 'images/main04.jpg'
			},
			],
			transition: 'slideLeft2'
		});
	</script>
</body>

</html>
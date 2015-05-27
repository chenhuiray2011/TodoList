<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {

    public function index(){
    	$Item=M('Item');
    	// $data = $this->getuseritems('cray','','');
    	// $data = $this->gettagsitems('tagw2','20150501','20150602');
    	// dump($data);
    	$this->display();
    }
    //添加ToDo Item
    protected function additem($cuser,$title,$context,$tags){
    	$Item=M('Item');
		$data['cuser'] =$cuser;
		$data['title'] = $title;
		$data['context'] = $context;
		$data['tags']= $tags;
		$data['cdate'] = date("Y-m-d h:i:s");//获取当前日期
		$result = $Item->data($data)->add();
		if($result){
			return 'S';
		}else{
			return 'E';
		}
	}
	//通过用户名查询Items
	protected function getuseritems($cuser,$begin,$end){
		$Item=M('Item');
		$map['user'] = array('EQ',$cuser);
		if($begin != null && $end !=null){
			$map['cdate'] = array('BETWEEN',array($begin,$end));
		}
		$datalist = $Item->where($map)->select();
		return $datalist;
	}
	//通过标签查询Items
	protected function gettagsitems($tag,$begin,$end){
		$Item=M('Item');
		$tag = "%".$tag."%";//字符串连接
		$map['tags'] = array('LIKE',$tag);
		if($begin != null && $end !=null){
			$map['cdate'] = array('BETWEEN',array($begin,$end));
		}
		$datalist = $Item->where($map)->select();
		return $datalist;
	}
	public function ajaxadd(){
		$result = $this->additem($_GET['cuser'],'',$_GET['context'],'');
		if($result =='S'){
			$this->ajaxReturn('SUC');
		}else{
			$this->ajaxReturn('FALSE');
		}
	}
}
const menu = {
    list() {
        return [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"资料类型","menuJump":"列表","tableName":"ziliaoleixing"}],"menu":"资料类型管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除","查看评论"],"menu":"学习资料","menuJump":"列表","tableName":"xuexiziliao"}],"menu":"学习资料管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看"],"menu":"已完成订单","tableName":"orders/已完成"},{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看"],"menu":"已发货订单","tableName":"orders/已发货"},{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"未支付订单","tableName":"orders/未支付"},{"appFrontIcon":"cuIcon-form","buttons":["查看"],"menu":"已取消订单","tableName":"orders/已取消"},{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"appFrontIcon":"cuIcon-wenzi","buttons":["查看"],"menu":"已退款订单","tableName":"orders/已退款"}],"menu":"订单管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["查看"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;

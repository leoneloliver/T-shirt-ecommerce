var ProductRow = React.createClass({
    render: function() {
        
        return (
        <div className="col s12 m6 l3">
          <div className="icon-block">
         
            <h5 className="center center-align">{this.props.product.name}</h5>
            <a className="smoothScroll link-img"><img src={this.props.product.photo} /></a>

            <div className="light price center-align">{this.props.product.price}</div>
            <div className="add"><a data-photo={this.props.product.photo} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a></div>
          </div>
        </div>
        );
    }
});

var ProductAll = React.createClass({
    render: function() {
        var rows = [];
        // var lastCategory = null;
        this.props.products.forEach(function(product) {
            // if (product.category !== lastCategory) {
            //     rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            // }
            rows.push(<ProductRow product={product} key={product.name} />);
            // lastCategory = product.category;
        });
        return (
            <div className="row product">{rows}</div>         
        );
    }
});

var Mylist = React.createClass({
    render: function() {
        return (
                <ProductAll products={this.props.products} />     
        );
    }
});

var PRODUCTS = [
  {price: '$13.99', stocked: true, name: 'HTML', photo: 'img/product1.jpg'},
  {price: '$13.99', stocked: true, name: 'HTML5' , photo: 'img/product2.jpg'},
  {price: '$13.99', stocked: true, name: 'CSS' , photo: 'img/product3.jpg'},
  {price: '$13.99', stocked: true, name: 'JAVASCRIPT' , photo: 'img/product4.jpg'},
  {price: '$13.99', stocked: true, name: 'JQUERY' , photo: 'img/product5.jpg'},
  {price: '$13.99', stocked: true, name: 'ANGULAR' , photo: 'img/product6.jpg'},
  {price: '$13.99', stocked: true, name: 'FRONT END' , photo: 'img/product7.jpg'},
  {price: '$13.99', stocked: true, name: 'REACTJS' , photo: 'img/product8.jpg'},
];
 
ReactDOM.render(
    <Mylist products={PRODUCTS} />,
    document.getElementById('prod')
);

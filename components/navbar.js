/**
 * @file
 *
 * Summary.
 * <p>A Stateless Functional Component.</p>
 *
 * Instead of using a class we use a function that returns a react element.
 *
 * @author {@link https://codewithmosh.com|Mosh Hamedani}
 * @author Paulo Roma
 * @since 08/10/2021
 * @see <a href="../src/components/navbar.jsx">source</a>
 * @see <a href="../components/navbar.js">source Babel</a>
 */

/**
 * <p>A function to return a <a href="/cwdc/5-bootstrap/5.4.html">navbar</a> element.</p>
 *
 * To simplify this code, we use object destructuring, to avoid using this.props, but
 * just totalCounters.
 *
 * @return {HTMLElement} a &lt;nav&gt; tag with the total of non-zero counters.
 * @see https://getbootstrap.com/docs/5.0/components/navbar/
 * @see https://getbootstrap.com/docs/5.0/components/badge/
 */
var NavBar = function NavBar(_ref) {
    var totalCounters = _ref.totalCounters;

    return React.createElement(
        "nav",
        { className: "navbar navbar-light bg-light" },
        React.createElement(
            "div",
            { style: { fontSize: "32px" } },
            " Total ",
            React.createElement(
                "span",
                { className: "badge rounded-pill bg-secondary" },
                totalCounters
            )
        )
    );
};
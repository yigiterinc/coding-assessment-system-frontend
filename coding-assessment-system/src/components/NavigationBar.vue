<template>
    <div class="navbar-with-login">
        <nav class="navbar navbar-default navbar-expand-lg navbar-light">
            <div class="navbar-brand">
                <a href="/">
                    <img src="../assets/images/logo.png" width="32px" height="32px" style="margin-top: 5px;">
                    <span>CODESTUDIO</span>
                </a>
            </div>
            <!-- Collection of nav links, forms, and other content for toggling -->
            <div id="navbarCollapse" class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">Login</a>
                        <ul class="dropdown-menu form-wrapper">
                            <li>
                                <form action="/examples/actions/confirmation.php" method="post">
                                    <p class="hint-text">Sign in with your social media account</p>
                                    <div class="form-group social-btn clearfix">
                                        <a href="#" class="btn btn-primary pull-left"><i class="fa fa-facebook"></i> Facebook</a>
                                        <a href="#" class="btn btn-info pull-right"><i class="fa fa-twitter"></i> Twitter</a>
                                    </div>
                                    <div class="or-seperator"><b>or</b></div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Username" required="required">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password" required="required">
                                    </div>
                                    <input type="submit" class="btn btn-primary btn-block" value="Login">
                                    <div class="form-footer">
                                        <a href="#">Forgot Your password?</a>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NavigationBar",
        mounted() {
            let ajaxScriptItem = document.createElement('script')
            ajaxScriptItem.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js')
            document.head.appendChild(ajaxScriptItem)

            let bootstrapScriptItem = document.createElement('script')
            bootstrapScriptItem.setAttribute('src', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js')
            document.head.appendChild(bootstrapScriptItem)
        }
    }

</script>


<style scoped>
    @import "../assets/css/navbar.css";
    @import url('https://fonts.googleapis.com/css?family=Varela+Round');
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    @import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');


</style>